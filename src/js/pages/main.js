'use strict';
const m = require('mithril');

const page = require('../components/page');
const repos = require('../components/repos');
const conduct = require('../components/conduct');
const cla = require('../components/cla');
const jobs = require('../components/jobs');

const main = {
  view() {
    return m.component(page, {
      content: [repos, conduct, cla, jobs]
    });
  }
};

module.exports = main;
