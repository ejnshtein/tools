/**
 * @param {Number} timeout Timeout in ms
 * @returns {Promise<undefined>}
 */
module.exports = function sleep (timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}
