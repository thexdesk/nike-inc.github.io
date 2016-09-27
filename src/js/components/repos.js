'use strict';

const m = require('mithril');
const GitHub = require('github-api');
const contributors = require('./contributors');

const label = {
  'JS': '.js',
  'Java': '.java',
  'Swift': '.swift'
};

function renderCards(repo) {
  if (!repo) {
    return;
  }

  repo.language = repo.language === 'CSS' || repo.language === 'JavaScript' ? 'JS' : repo.language;

  const labelLanguage = label[repo.language] || '.label-default';

  return repo ? m('.ncss-col-sm-12.ncss-col-md-6.ncss-col-lg-3.pt6-sm.prl5-sm.pb6-sm.mt6-sm.bg-white.border-light-grey.u-va-t', [
    m('figure.pb2-sm.border-bottom-light-grey.u-align-center', [
      m('a', {
          href: repo.html_url
        },
        m('img.img.u-sm-ib.u-full-width', {
          alt: 'github',
          src: `/dist/img/icons/${repo.name.toLowerCase()}_no_txt.svg`,
          onerror: 'this.src="/dist/img/icons/nike-inc.github.io_no_txt.svg"'
        })
      ),
      m('figcaption.ncss-container.mt4-sm',
        m('.ncss-row', [
          m('.ncss-col-sm-8.u-va-m.u-align-left',
            m('a.project-title.u-sm-b.ncss-brand', {
                href: repo.html_url
              },
              repo.name.toUpperCase().replace('NIKE-INC.', '')
            )
          ),
          m('.ncss-col-sm-4.u-va-m.u-align-right',
            m(`span.rounded.ncss-brand.bg-accent.text-color-white.prl2-sm.u-uppercase${labelLanguage}`, repo.language)
          )
        ])
      )
    ]),
    m('section.mt2-sm.p2-sm', [
      m('a.text-color-grey.small', {
        href: repo.html_url
      }, repo.full_name),
      m('article.info.small',
        repo.description.length > 114 ? `${repo.description.substr(0, 114)} ...` : repo.description
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
            href: `https://www.facebook.com/sharer/sharer.php?u=${repo.html_url}`
          }),
          m('a.g72-twitter.h3.text-color-grey', {
            href: `https://twitter.com/intent/tweet?text=${repo.html_url}`
          })
        ]),
        m('.ncss-col-sm-6.u-align-right.u-va-m',
          m('a.ncss-btn.border-light-grey.text-color-grey.ncss-brand.pt2-sm.pr5-sm.pb2-sm.pl5-sm', {
              href: repo.html_url
            },
            'REPO'
          )
        )
      ])
    )
  ]) : '';
}

const repositories = {
  controller() {
    const ctrl = this;
    const repo_metadata = repo_metadata || {};
    ctrl.repos = repo_metadata.public_repositories || [];
    ctrl.contributors = repo_metadata.organization_members || [];

    ctrl.init = (el, isInit) => {
      if (!isInit) {
        //// using repository metadata for live
        //// for local dev you can setup jekyll
        //// https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll
        ////
        //// or you could save yourself the hassle and uncomment the next line
        //ctrl.getRepos();
        //// you will also need to comment out the --- lines and
        //// the repo_metadata assignment in index.html
      }
    };
    ctrl.getRepos = () => {

      // Auth to view private repos
      // process.env.GH_USER = '' || window.prompt('Enter Github User');
      // process.env.GH_PASS = '' || window.prompt('Enter Github Pass');

      const ghAuth = {
        username: process.env.GH_USER,
        password: process.env.GH_PASS
      };
      const gh = new GitHub(ghAuth);

      const org = gh.getOrganization('nike-inc');

      org.listMembers()
        .then(res => {
          const members = res.data;
          ctrl.contributors = members;
          m.redraw(true);
        }).catch(err => {
          console.log('catch', err);
        });

      org.getRepos((err, repos) => {
          ctrl.repos = repos;

          repos.map(repo => {
            const remoteRepo = gh.getRepo('nike-inc', repo.name);
            remoteRepo.getContributors((err, contributorsWrap) => {
              contributorsWrap.map(contributor => {
                ctrl.contributors.push(contributor.author);
              });
            });
          });
          m.redraw(true);
        })
        .catch(err => {
          console.log('catch', err);
        });
    };
  },
  view(ctrl) {
    return m('div', {
        id: 'content',
        config: ctrl.init
      },
      m('section.ncss-container.fixed-fluid.prl7-md.prl12-lg',
        m('.ncss-row',
          ctrl.repos.map(renderCards)
        )
      ),
      m.component(contributors, {
        contributors: ctrl.contributors
      })
    );
  }
};

module.exports = repositories;
