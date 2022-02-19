const fs = require("fs");

/**
 *
 * @param {string} dir path for the commands.
 * @param {string} suffix file extension.
 * @returns {string[]}
 */
const getFiles = (dir, suffix) => {
  const files = fs.readdirSync(dir, {
    withFileTypes: true,
  });
  let commandFiles = [];

  files.forEach((file) => {
    if (file.isDirectory())
      commandFiles = [...commandFiles, ...getFiles(`${dir}/${file.name}`, suffix)];
    else if (file.name.endsWith(suffix)) commandFiles.push(`${dir}/${file.name}`);
  });
  return commandFiles;
};

module.exports = getFiles;
