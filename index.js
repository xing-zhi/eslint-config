const possibleErrors = require('./possible-errors');
const bestPractices = require('./best-practices');
const variables = require('./variables');
const node = require('./node');
const stylisticIssues = require('./stylistic-issues');
const es6 = require('./es6');

module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    window: true,
    document: true
  },
  rules: Object.assign({},
                       possibleErrors,
                       bestPractices,
                       variables,
                       node,
                       stylisticIssues,
                       es6)
};
