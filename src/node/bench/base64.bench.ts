import { benchSync } from "@hazae41/deimos"
import { initSyncBundledOnce } from "index.js"
import { base64ct_decode, base64ct_encode } from "../../../wasm/pkg/alocer.js"

initSyncBundledOnce()

const samples = 1_000
const warmup = true

const buffer = benchSync("buffer base64", () => {
  const buffer = Buffer.allocUnsafe(4096)
  const result = Buffer.allocUnsafe(4096)
  crypto.getRandomValues(buffer)
  const text = buffer.toString("base64")
  const buffer2 = Buffer.from(text, "base64")
  result.set(buffer2, 0)
}, { samples, warmup })

const alocer = benchSync("alocer base64", () => {
  const buffer = Buffer.allocUnsafe(4096)
  const result = Buffer.allocUnsafe(4096)
  crypto.getRandomValues(buffer)
  const text = base64ct_encode(buffer)
  const buffer2 = base64ct_decode(text).bytes.slice()
  result.set(buffer2, 0)
}, { samples, warmup })

alocer.tableAndSummary(buffer)