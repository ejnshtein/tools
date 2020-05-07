/**
 * @param {String} text
 * @param {String} encoding
 * @returns {String}
 */
exports.encode = function encode (text, encoding = 'hex') {
  return Buffer.from(text).toString(encoding)
}

/**
 * @param {String} text
 * @param {String} encoding
 * @returns {String}
 */
exports.decode = function decode (text, encoding = 'hex') {
  return Buffer.from(text, encoding).toString('ascii')
}
