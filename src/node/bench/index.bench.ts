import { benchSync } from "@hazae41/deimos"
import { base58 } from "@scure/base"
import { initSyncBundledOnce } from "index.js"
import { base16ct_decode_lower, base16ct_encode_lower, base58_decode, base58_encode, base64ct_decode, base64ct_encode } from "../../../wasm/pkg/alocer.js"

initSyncBundledOnce()

{
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
    const buffer2 = base64ct_decode(text).bytes
    result.set(buffer2, 0)
  }, { samples, warmup })

  const alocer2 = benchSync("alocer base64 slice", () => {
    const buffer = Buffer.allocUnsafe(4096)
    const result = Buffer.allocUnsafe(4096)
    crypto.getRandomValues(buffer)
    const text = base64ct_encode(buffer)
    const buffer2 = base64ct_decode(text).bytes.slice()
    result.set(buffer2, 0)
  }, { samples, warmup })

  alocer.tableAndSummary(buffer, alocer2)
}

{
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
    const buffer2 = base16ct_decode_lower(text).bytes
    result.set(buffer2, 0)
  }, { samples, warmup })

  const alocer2 = benchSync("alocer base16 slice", () => {
    const buffer = Buffer.allocUnsafe(4096)
    const result = Buffer.allocUnsafe(4096)
    crypto.getRandomValues(buffer)
    const text = base16ct_encode_lower(buffer)
    const buffer2 = base16ct_decode_lower(text).bytes.slice()
    result.set(buffer2, 0)
  }, { samples, warmup })

  alocer.tableAndSummary(buffer, alocer2)
}

{
  const samples = 10
  const warmup = true

  const scure = benchSync("scure base58", () => {
    const buffer = Buffer.allocUnsafe(1024)
    const result = Buffer.allocUnsafe(1024)
    crypto.getRandomValues(buffer)
    const text = base58.encode(buffer)
    const buffer2 = base58.decode(text)
    result.set(buffer2, 0)
  }, { samples, warmup })

  const alocer = benchSync("alocer base58", () => {
    const buffer = Buffer.allocUnsafe(1024)
    const result = Buffer.allocUnsafe(1024)
    crypto.getRandomValues(buffer)
    const text = base58_encode(buffer)
    const buffer2 = base58_decode(text).bytes
    result.set(buffer2, 0)
  }, { samples, warmup })

  const alocer2 = benchSync("alocer base58 slice", () => {
    const buffer = Buffer.allocUnsafe(1024)
    const result = Buffer.allocUnsafe(1024)
    crypto.getRandomValues(buffer)
    const text = base58_encode(buffer)
    const buffer2 = base58_decode(text).bytes.slice()
    result.set(buffer2, 0)
  }, { samples, warmup })

  alocer.tableAndSummary(scure, alocer2)
}