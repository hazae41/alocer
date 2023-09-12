import { assert, test } from "@hazae41/phobos"
import { base64_decode_unpadded, base64_encode_padded, initBundledOnce } from "mods/index.js"

test("base64", async () => {
  await initBundledOnce()

  const bytes = crypto.getRandomValues(new Uint8Array(256))

  const text = base64_encode_padded(bytes)
  const text2 = Buffer.from(bytes).toString("base64")

  const bytes2 = base64_decode_unpadded(text).copyAndDispose()

  assert(text === text2)
  assert(Buffer.from(bytes2).equals(Buffer.from(bytes)))
})