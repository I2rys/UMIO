//Dependencies
const Puppeteer_Extra = require("puppeteer-extra")
const RandomString = require("randomstring")
const Puppeteer = require("puppeteer")
const ReadLine = require("readline")
const MongoDB = require("mongodb")
const Express = require("express")
const Request = require("request")
const Lodash = require("lodash")
const Axios = require("axios")
const Chalk = require("chalk")
const Os = require("os")
const Fs = require("fs")

//Exporter
module.exports = {
    Chalk: Chalk,
    ReadLine: ReadLine,
    Request: Request,
    RandomString: RandomString,
    Lodash: Lodash,
    Puppeteer: Puppeteer,
    Puppeteer_Extra: Puppeteer_Extra,
    Express: Express,
    MongoDB: MongoDB,
    Axios: Axios,
    Fs: Fs,
    Os: Os
}
