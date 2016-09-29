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
      )
    );
  }
};


module.exports = header;
