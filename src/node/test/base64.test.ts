import { assert, test } from "@hazae41/phobos"
import { base64ct_decode, base64ct_encode, initSyncBundledOnce } from "mods/index.js"

test("base64", async () => {
  initSyncBundledOnce()

  const bytes = crypto.getRandomValues(new Uint8Array(256))

  const text = base64ct_encode(bytes)
  const text2 = Buffer.from(bytes).toString("base64")

  const bytes2 = base64ct_decode(text).bytes

  assert(text === text2)
  assert(Buffer.from(bytes2).equals(Buffer.from(bytes)))
})