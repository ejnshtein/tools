/**
 * @param {String} name
 * @returns {String}
 */
module.exports = function getArgv(name) {
  const id = process.argv.indexOf(name)
  if (id !== -1) {
    return process.argv[id + 1]
  }
  return undefined
}
