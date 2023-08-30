import { benchSync } from "@hazae41/deimos"
import { initSyncBundledOnce } from "index.js"
import { base16ct_decode_lower, base16ct_encode_lower } from "../../../wasm/pkg/alocer.js"

initSyncBundledOnce()

const samples = 1_000
const warmup = true

const buffer = benchSync("buffer base16", () => {
  const buffer = Buffer.allocUnsafe(4096)
  const result = Buffer.allocUnsafe(4096)
  crypto.getRandomValues(buffer)
  const text = buffer.toString("hex")
  const buffer2 = Buffer.from(text, "hex")
  result.set(buffer2, 0)
}, { samples, warmup })

const alocer = benchSync("alocer base16", () => {
  const buffer = Buffer.allocUnsafe(4096)
  const result = Buffer.allocUnsafe(4096)
  crypto.getRandomValues(buffer)
  const text = base16ct_encode_lower(buffer)
  const buffer2 = base16ct_decode_lower(text).bytes.slice()
  result.set(buffer2, 0)
}, { samples, warmup })

alocer.tableAndSummary(buffer)