const fs = require('fs');
const colors = require('colors');

const env = process.env.UNIVERSO_ENVIRONMENT;

/**
 * Get the configuration
 * @return {JSON} The configuration JSON
 */
function getConfig() {
  let config = {};
  const confFile = `./config/${env}.json`;

  console.log(colors.yellow('[conf.get.readConfig]'), env);
  try {
    config = JSON.parse(fs.readFileSync(confFile, 'utf8'));
    config.env = env;
  } catch (e) {
    console.error(colors.red('ERROR: [conf.get.readConfig]', env, e));
    return {};
  }

  console.log(colors.green('[conf.get.readConfig]', 'config found', env));

  return config;
}

module.exports = getConfig();
