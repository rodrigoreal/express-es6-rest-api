import fs from 'fs';
import colors from 'colors';

const env = process.env.UNIVERSO_ENVIRONMENT;

/**
 * Get the configuration
 * @return {JSON} The configuration JSON
 */
function getConfig() {
  let config = {};
  const confFile = `./server/config/${env}.json`;

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

export default getConfig();
