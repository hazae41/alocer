import { assert, test } from "@hazae41/phobos"
import { base16ct_decode_lower, base16ct_encode_lower, initSyncBundledOnce } from "mods/index.js"

test("base16", async () => {
  initSyncBundledOnce()

  const bytes = crypto.getRandomValues(new Uint8Array(256))

  const text = base16ct_encode_lower(bytes)
  const text2 = Buffer.from(bytes).toString("hex")

  const bytes2 = base16ct_decode_lower(text).bytes

  assert(text === text2)
  assert(Buffer.from(bytes2).equals(Buffer.from(bytes)))
})