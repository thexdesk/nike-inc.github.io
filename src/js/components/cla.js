'use strict';
const m = require('mithril');

const conduct = {
  view() {
    return m('section.container.ncss-container.fixed-fluid.prl8-md.prl12-lg.mt6-sm',
      m('.ncss-row.bg-white.border-light-grey',
        m('.ncss-col-sm-12', [
          m('header.border-bottom-light-grey.pt2-sm.pb2-sm.u-align-center',
            m('h2.ncss-brand',
              'CONTRIBUTOR\'S LICENSE AGREEMENT'
            )
          ),
          m('article.u-align-center.text-color-grey.pt4-sm.prl2-sm.prl12-md.pb6-sm', [
            m('p',
              'To contribute to Nike open-source projects you must accept and submit a Contributors License Agreement (CLA).'
            ),
            m('a.ncss-btn.border-light-grey.text-color-grey.ncss-brand.pt2-sm.pr5-sm.pb2-sm.pl5-sm.mt6-sm', {
                href: 'https://github.com/Nike-Inc/nike-inc.github.io/blob/master/CLA.md'
              },
              'VIEW'
            )
          ])
        ])
      )
    );
  }
};

module.exports = conduct;
