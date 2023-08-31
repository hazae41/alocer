import { benchSync } from "@hazae41/deimos"
import { base58 } from "@scure/base"
import { initSyncBundledOnce } from "index.js"
import { base16_decode_lower, base16_encode_lower, base58_decode, base58_encode, base64_decode, base64_encode, base64url_decode, base64url_encode } from "../../../wasm/pkg/alocer.js"

initSyncBundledOnce()

{
  const samples = 1_000_000
  const warmup = true

  const random = Buffer.allocUnsafe(4096)
  const result = Buffer.allocUnsafe(4096)
  crypto.getRandomValues(random)
  const text = base64_encode(random)
  const slice = base64_decode(text)

  const nocopy = benchSync("zero-copy", () => {
    result.set(slice.bytes, 0)
  }, { samples, warmup })

  const copy = benchSync("copy", () => {
    result.set(slice.bytes.slice(), 0)
  }, { samples, warmup })

  nocopy.tableAndSummary(copy)
}

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
    const text = base64_encode(buffer)
    const buffer2 = base64_decode(text).bytes
    result.set(buffer2, 0)
  }, { samples, warmup })

  alocer.tableAndSummary(buffer)
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
    const text = base16_encode_lower(buffer)
    const buffer2 = base16_decode_lower(text).bytes
    result.set(buffer2, 0)
  }, { samples, warmup })

  alocer.tableAndSummary(buffer)
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

  alocer.tableAndSummary(scure)
}

{
  const samples = 1_000
  const warmup = true

  const buffer = benchSync("buffer base64url", () => {
    const buffer = Buffer.allocUnsafe(4096)
    const result = Buffer.allocUnsafe(4096)
    crypto.getRandomValues(buffer)
    const text = buffer.toString("base64url")
    const buffer2 = Buffer.from(text, "base64url")
    result.set(buffer2, 0)
  }, { samples, warmup })

  const alocer = benchSync("alocer base64url", () => {
    const buffer = Buffer.allocUnsafe(4096)
    const result = Buffer.allocUnsafe(4096)
    crypto.getRandomValues(buffer)
    const text = base64url_encode(buffer)
    const buffer2 = base64url_decode(text).bytes
    result.set(buffer2, 0)
  }, { samples, warmup })

  alocer.tableAndSummary(buffer)
}