'use strict';
const m = require('mithril');

const header = {
  view() {
    return m("header.ncss-container.bg-black.u-align-center",
      m(".ncss-row",
        m(".ncss-col-sm-12.ncss-col-md-10.ncss-col-lg-7",
          m("img", {
            alt: 'Nike Open Source',
            class: '',
            src: '/dist/img/banner.jpg'
          })
        )
      ),
      m(".ncss-row.prl5-sm",
        m(".ncss-col-sm-12.u-align-right.text-color-white.pb6-sm.ft",
          m("a.ncss-btn.border-light-grey.text-color-white.ncss-brand.pt2-sm.pr5-sm.pb2-sm.pl5-sm", {
              href: 'http://medium.com/nikeengineering'
            },
            "ENGINEERING BLOG"
          )
        )
      )
    );
  }
};


module.exports = header;
