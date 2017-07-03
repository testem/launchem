'use strict';

module.exports = {
  /**
   * Given a Launchem config, determines known browser launchers for the system.
   */
  knownBrowsers: require('./lib/known-browsers'),

  /**
   * Given a list of browsers, returns a filtered list of the ones actually
   * available on the machine.
   */
  availableBrowsers: require('./lib/available-browsers')
};
