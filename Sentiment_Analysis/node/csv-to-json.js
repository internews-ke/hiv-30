#!/usr/bin/env node
'use strict'

var fs = require('fs')
var path = require('path')
var dsv = require('dsv')
var _ = require('underscore')

var file = fs.readFileSync(path.join(__dirname, 'hiv-30.csv'), 'UTF-8')

var clusters = ['people', 'places', 'organizations']

var rows = dsv.csv.parse(file)

// rows = rows.slice(0, 1000)

// console.log(rows)

var years = {}

rows.forEach(function(row) {
    var year = years[row.year] || { name: row.year, articles: {} }
    years[row.year] = year

    var article = year.articles[row.file] || { name: fileNameToDate(row.file), people: [], places: [], organizations: [] }
    year.articles[row.file] = article

    article[row.cluster].push(row.value)
})

years = _.values(years)

years.forEach(function(y) {
    y.children = _.values(y.articles)
    delete(y.articles)
    y.children.forEach(function(yc) {
        yc.children = []
        clusters.forEach(function(c) {
            if (yc[c].length) {
                yc.children.push({
                    name: c,
                    terms: yc[c].map(function(d) {
                        return d
                    })
                })
            }
            delete(yc[c])
        })
    })

    var outFile = path.join(__dirname, 'output', 'hiv-' + y.name + '.json')

    fs.writeFileSync(outFile, pp({ name:"hiv", children:[y] }))
    console.log('Saved to ' + outFile)
})

var outFile = path.join(__dirname, 'output', 'hiv-all.json')

fs.writeFileSync(outFile, pp({ name:"hiv", children: years }))
console.log('Saved to ' + outFile)

function pp(o) {
    // return JSON.stringify(o)
    return JSON.stringify(o, null, 2)
}

function fileNameToDate(f){
    // 91080707DN.txt
    // 1991  08 07
    // console.log(f)
    var y = f.slice(0,2)
    var m = f.slice(2,4)
    var d = f.slice(4,6)
    return [d, m, y].join('-')
};