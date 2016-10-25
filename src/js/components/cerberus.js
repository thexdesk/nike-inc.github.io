'use strict';

const m = require('mithril');
const CERBERUS = 'cerberus';
const CERBERUS_URL = 'http://nike-inc.github.io/cerberus';

/**
 * Method to create a custom card for cerberus that will link to the github page rather than the repo.
 * We want to do this because Cerberus contains many sub projects and has its own github page.
 *
 * @param imgIcon The image generated my repos component
 * @param repo The github repo object
 * @returns {*} The repo card to render
 */
export function getCustomCerberusCard(imgIcon, repo) {
  return m('.ncss-col-sm-12.ncss-col-md-6.ncss-col-lg-3.pt6-sm.prl5-sm.pb6-sm.mt6-sm.bg-white.border-light-grey.u-va-t', [
    m('figure.pb2-sm.border-bottom-light-grey.u-align-center', [
      m('a', {
          href: CERBERUS_URL
        },
        m('.cerberus-image', [
          m.trust(imgIcon)
        ])
      ),
      m('figcaption.ncss-container.mt4-sm',
        m('.ncss-row', [
          m('.ncss-col-sm-8.u-va-m.u-align-left',
            m('a.project-title.u-sm-b.ncss-brand', {
                href: CERBERUS_URL
              },
              repo.name.toUpperCase().replace('NIKE-INC.', '')
            )
          ),
          m('.ncss-col-sm-4.u-va-m.u-align-right')
        ])
      )
    ]),
    m('section.mt2-sm.p2-sm', [
      m('a.text-color-grey.small', {
        href: CERBERUS_URL
      }, repo.full_name),
      m('article.info.small',
        repo.description && repo.description.length > 114 ? `${repo.description.substr(0, 114)} ...` : repo.description
      )
    ]),
    m('section.ncss-container.pb4-sm.border-bottom-light-grey',
      m('.ncss-row', [
        m('.ncss-col-sm-6.prl1-sm.u-align-right',
          m('small.rounded.bg-medium-grey.text-color-dark-grey.prl2-sm.u-sm-ib.',
            `Forks: ${repo.forks}`
          )
        ),
        m('.ncss-col-sm-6.prl1-sm',
          m('small.rounded.bg-medium-grey.text-color-dark-grey.prl2-sm.u-sm-ib',
            `Stars: ${repo.stargazers_count}`
          )
        )
      ])
    ),
    m('footer.ncss-container.mt4-sm',
      m('.ncss-row', [
        m('.ncss-col-sm-6.u-va-m', [
          m('a.g72-facebook.h3.text-color-grey.mr2-sm', {
            href: `https://www.facebook.com/sharer/sharer.php?u=${CERBERUS_URL}`
          }),
          m('a.g72-twitter.h3.text-color-grey', {
            href: `https://twitter.com/intent/tweet?text=${CERBERUS_URL}`
          })
        ]),
        m('.ncss-col-sm-6.u-align-right.u-va-m',
          m('a.ncss-btn.border-light-grey.text-color-grey.ncss-brand.pt2-sm.pr5-sm.pb2-sm.pl5-sm', {
              href: CERBERUS_URL
            },
            'WEBSITE'
          )
        )
      ])
    )
  ]);
}

/**
 * Cerberus has many sub projects and this method will determine if a github repo is a sub project of cerberus.
 *
 * @param repoName The GitHub repository name.
 * @returns {boolean} True if the repo is a sub project of Cerberus
 */
export function isRepoCerberusSubProject(repoName) {
  return repoName.toLowerCase().indexOf(`${CERBERUS}-`) > -1;
}

/**
 * Method for determining if Repository is the main Cerberus GitHub page.
 *
 * @param repoName The GitHub repository name.
 * @returns {boolean} True if the repo is the main GitHub page for Cerberus
 */
export function isRepoCerberusGitHubPage(repoName) {
  return repoName.toLowerCase() == CERBERUS
}
