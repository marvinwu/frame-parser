#!/usr/bin/env node
const program = require('commander')
const yaml = require('js-yaml')
const fs = require('fs')
const parser = require('../lib/index')
const glob = require('glob')

program
  .command('parse <inputHtml> <fileName> ')
  .action((inputHtml, fileName) => {
    const job = yaml.safeLoad(fs.readFileSync(fileName, 'utf8'))
    const html = fs.readFileSync(inputHtml, 'utf8')
    const output = parser.parserHelper(html, job)
    if (typeof output === 'array' || typeof output === 'object') {
      console.log(JSON.stringify(output))
    } else {
      console.log(output)
    }
  })

program
  .command('parseDir <globPattern> <fileName> [limit] ')
  .action((globPattern, fileName, limit = 10000000) => {
    const job = yaml.safeLoad(fs.readFileSync(fileName, 'utf8'))
    const files = glob.sync(globPattern) || []
    const output = []
    let count = 1
    files.every(file => {
      console.error(`processing ${file}`)
      const isFile = fs.statSync(file).isFile()
      if (isFile) {
        const html = fs.readFileSync(file, 'utf8')
        const record = parser.parserHelper(html, job)
        output.push({ _path: file, ...record })
      }
      if (count > limit) {
        return false
      }
      count++
      return true
    })
    console.log(JSON.stringify(output))
  })

program.on('command:*', () => {
  console.error(
    'Invalid command: %s\nSee --help for a list of available commands.',
    program.args.join(' ')
  )
  process.exit(1)
})

program.parse(process.argv)
