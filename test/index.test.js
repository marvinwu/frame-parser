const _ = require('lodash')
const parser = require('../lib/index')
const jsonfile = require('jsonfile')
const fs = require('fs')

let cheerio = require('cheerio')

test('parserHelperSingle-basic', () => {
  let job = {
    '.fusion-layout-column.fusion_builder_column.fusion-builder-column-1.fusion_builder_column_1_2 .fusion-text-1': {
      title: 'h1',
      description: ['p']
    }
  }

  const inputHtml = fs.readFileSync('./test/input/sands-full.html', {
    encoding: 'utf-8'
  })

  let result = parser.parserHelperSingle(inputHtml, job)
  expect(result).toEqual({
    title: 'Anacampseros rufescens',
    description: [
      'This slow-growing succulent spreads out in clumping mats. The tops of its leaves are dark green, while the underside is a deep purple color. The green gives way to red when it is happily stressed.',
      'Click here for an explanation of terms. This page contains affiliate links'
    ]
  })
})

test('parserHelper-basic', () => {
  let job = {
    '.fusion-layout-column.fusion_builder_column.fusion-builder-column-1.fusion_builder_column_1_2 .fusion-text-1': {
      title: 'h1',
      description: ['p']
    },
    '.fusion-layout-column.fusion_builder_column.fusion-builder-column-1.fusion_builder_column_1_2 .fusion-checklist-1': {
      quick_look: {
        _s: 'li',
        _d: [
          {
            title: 'i @ class',
            content: ['p']
          }
        ]
      }
    },
    '.project-content .fusion-builder-row-3 .fusion-text.fusion-text-6': {
      care_2: 'h5:nth-last-of-type(2)',
      care_2_description: 'h5:nth-last-of-type(2) ~ p',
      care_1: 'h5:nth-last-of-type(1)',
      care_1_description: 'h5:nth-last-of-type(1) + p'
    }
  }

  const inputHtml = fs.readFileSync('./test/input/sands-full.html', {
    encoding: 'utf-8'
  })

  let result = parser.parserHelper(inputHtml, job)
  console.log(result)
  // expect(result).toEqual({
  //     title: 'Anacampseros rufescens',
  //     description: [
  //       'This slow-growing succulent spreads out in clumping mats. The tops of its leaves are dark green, while the underside is a deep purple color. The green gives way to red when it is happily stressed.',
  //       'Click here for an explanation of terms. This page contains affiliate links'
  //     ]
  //   })
})
