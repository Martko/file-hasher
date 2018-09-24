const fs = require('fs');
const crypto = require('crypto');

function convert(stream) {
  return Buffer.from(stream).toString('base64');
}

function hashFile(filename, callback, algorithm) {
  if (typeof callback !== 'function') {
    throw new TypeError('Argument "callback" must be a function');
  }

  const output = crypto.createHash(algorithm || 'md5');
  const input = fs.createReadStream(filename);

  input.on('error', err => callback(err));
  output.once('readable', () => callback(null, convert(output.read())));

  input.pipe(output);
}

module.exports = hashFile;
