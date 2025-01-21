import * as fs from "fs";
import * as crypto from "crypto";

function convert(stream: Buffer, encoding: BufferEncoding): string {
  return stream.toString(encoding);
}

function hashFile(
  filename: string,
  callback: (err: Error | null, hash?: string) => void,
  algorithm: string = "md5",
  encoding: BufferEncoding = "hex"
): void {
  if (typeof callback !== "function") {
    throw new TypeError('Argument "callback" must be a function');
  }

  const output = crypto.createHash(algorithm);
  const input = fs.createReadStream(filename);

  input.on("error", (err) => callback(err));
  output.once("readable", () =>
    callback(null, convert(output.read() as Buffer, encoding))
  );

  input.pipe(output);
}

export default hashFile;
