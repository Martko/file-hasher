# file-hasher
Node.js library for generating file hashes.

## Installing

**npm**:
~~~
npm install file-hasher
~~~
**yarn**:
~~~
yarn add file-hasher
~~~

## API
### `hashFile(path: string, callback: function, algorithm?: string, encoding?: string)`

Asynchronously get the hash of the file at `path`. If no algorithm is specified, md5 shall be used as default. If no encoding is specified, 'hex' is used.

## Examples

### Usage with default settings (md5, hex)
```js
const hashFile = require('file-hasher')

hashFile('index.js', (error, output) => {
  if (error) {
    throw error;
  }

  console.log(`hash is: ${output}`);
});

// hash is: 5be057751697d46af6d5fa2065a4b16c
});
```

### Usage with specific hash algorithm and encoding
```js
const hashFile = require('file-hasher')

hashFile('index.js', (error, output) => {
  if (error) {
    throw error;
  }

  console.log(`md5 hash with base64 encoding is: ${output}`);
}, 'sha256', 'base64');

// md5 hash with base64 encoding is: NUMulsRU7WYPv/hLS6ws7LZVMx53z5SnGhiB7bZ93qM=
```

## License

MIT