'use strict';

const m = require('mithril');
const RIPOSTE = 'riposte';
const RIPOSTE_URL = 'http://engineering.nike.com/riposte';

/**
 * Method to create a custom card for riposte that will link to the github page rather than the repo.
 * We want to do this because Riposte contains many sub projects and has its own github page.
 *
 * @param imgIcon The image generated my repos component
 * @param repo The github repo object
 * @returns {*} The repo card to render
 */
export function getCustomRiposteCard(imgIcon, repo) {
  // TBD -- once the custom Riposte site is ready, for now just ignore this.
}

/**
 * Riposte has many projects and this method will determine if a github repo is a sub project of riposte.
 *
 * @param repoName The GitHub repository name.
 * @returns {boolean} True if the repo is a sub project of Riposte
 */
export function isRepoRiposteSubProject(repoName) {
  return repoName.toLowerCase().indexOf(`${RIPOSTE}-`) > -1;
}

/**
 * Method for determining if Repository is the main Riposte GitHub page.
 *
 * @param repoName The GitHub repository name.
 * @returns {boolean} True if the repo is the main GitHub page for Riposte
 */
export function isRepoRiposteGitHubPage(repoName) {
  return repoName.toLowerCase() == RIPOSTE
}
