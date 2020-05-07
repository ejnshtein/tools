/**
 * @param {String} name
 * @returns {Boolean}
 */
module.exports = function argv (name) {
  return process.argv.includes(name)
}
