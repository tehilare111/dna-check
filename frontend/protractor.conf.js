// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const express=require('express');
const app=express();
module.exports = function (config) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  
  app.get('/jokes/random', (req, res) => {
    request(
      { url: 'http://127.0.0.1:4200' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });
}
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],



  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true', '--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'http://127.0.0.1:8000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    jasmine.getEnv().addReporter(new SpecReporter({ acspec: { displayStacktrace: true } }));
  }
};
