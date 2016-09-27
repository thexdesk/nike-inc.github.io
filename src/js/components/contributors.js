'use strict';
const m = require('mithril');

function renderContributors(contributor) {
  return contributor ? m('figure.ncss-col-sm-6.ncss-col-md-3.ncss-col-lg-2.u-align-center.mt4-sm', [
    m('a', {
        href: contributor.html_url
      },
      m('img.contributor-img.u-sm-ib', {
        src: contributor.avatar_url
      })
    ),
    m('figcaption.mt-1-sm',
      m('small',
        contributor.login
      )
    )
  ]) : '';
}

const contributors = {
  view(ctrl, args) {
    return m('section.container.ncss-container.fixed-fluid.prl8-md.prl12-lg.mt6-sm',
      m('.ncss-row.bg-white.border-light-grey',
        m('.ncss-col-sm-12', [
          m('header.border-bottom-light-grey.pt2-sm.pb2-sm.u-align-center',
            m('h2.ncss-brand',
              'CONTRIBUTORS'
            )
          ),
          m('article.ncss-container.u-align-center.text-color-grey.pb3-sm',
            m('.ncss-row',
              args.contributors.map(renderContributors)
            )
          )
        ])
      )
    );
  }
};

module.exports = contributors;
