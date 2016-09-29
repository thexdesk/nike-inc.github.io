'use strict';
const m = require('mithril');

const header = require('../components/header');
const footer = require('../components/footer');

const page = {
  view(ctrl, args) {
    return m('.wrapper', [
      m.component(header),
      m('main',
        args.content.map(content => m.component(content))
      ),
      m.component(footer)
    ]);
  }
};

module.exports = page;
