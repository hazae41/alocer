import { assert, test } from "@hazae41/phobos"
import { base58_decode, base58_encode, initBundledOnce } from "mods/index.js"

test("base58", async () => {
  await initBundledOnce()

  const bytes = crypto.getRandomValues(new Uint8Array(256))

  const text = base58_encode(bytes)
  const text2 = Buffer.from(bytes).toString("hex")

  const bytes2 = base58_decode(text).bytes

  assert(text === text2)
  assert(Buffer.from(bytes2).equals(Buffer.from(bytes)))
})