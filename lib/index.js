
const _ = require('lodash')
const jsonframe = require('jsonframe-cheerio2')
const cheerio = require('cheerio')

function jsonframeParser(inputHtml, frame = {}, option = {}) {
  const { select = 'body', _html = false } = option
  const $ = cheerio.load(inputHtml)
  jsonframe($)
  if (_html) {
    return $(select).html()
  }
  return $(select).scrape(frame, { debug: true })
}




function parserHelperSingle(inputHtml, job) {
  const inputClone = _.cloneDeep(inputHtml)
  const select = Object.keys(job)[0]
  // eslint-disable-next-line no-underscore-dangle
  let _html = false
  if (!job[select]) {
    _html = true
  }
  const frame = job[select]
  return jsonframeParser(inputClone, frame, { _html, select })
}

function parserHelper(inputHtml, jobs) {
  const output = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const [jobKey, jobValue] of Object.entries(jobs)) {
    const result = parserHelperSingle(inputHtml, { [jobKey]: jobValue })
    if (!jobValue) {
      return result
    }
    Object.assign(output, result)
  }
  return output
}

module.exports = {
 
  parserHelper,
  jsonframeParser,
  parserHelperSingle,
  
}
