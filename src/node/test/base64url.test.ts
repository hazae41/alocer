import { assert, test } from "@hazae41/phobos"
import { Memory, base64url_decode_unpadded, base64url_encode_unpadded, initBundledOnce } from "mods/index.js"

test("base64url", async () => {
  await initBundledOnce()

  const bytes = crypto.getRandomValues(new Uint8Array(256))

  const text = base64url_encode_unpadded(new Memory(bytes))
  const text2 = Buffer.from(bytes).toString("base64url")

  const bytes2 = base64url_decode_unpadded(text).bytes

  assert(text === text2)
  assert(Buffer.from(bytes2).equals(Buffer.from(bytes)))
})