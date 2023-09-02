import { benchSync } from "@hazae41/deimos";
import { base58 } from "@scure/base";
import { initBundledOnce } from "index.js";
import { base16_decode_lower, base16_encode_lower, base58_decode, base58_encode, base64_decode, base64_encode, base64url_decode, base64url_encode } from "../../../wasm/pkg/alocer.js";

if (false) {
  await initBundledOnce()

  const samples = 1_000_000
  const warmup = true

  const random = new Uint8Array(4096)
  const result = new Uint8Array(4096)
  crypto.getRandomValues(random)

  const nocopy = benchSync("zero-copy", () => {
    result.set(random, 0)
  }, { samples, warmup })

  const copy = benchSync("copy", () => {
    result.set(random.slice(), 0)
  }, { samples, warmup })

  nocopy.tableAndSummary(copy)
}

if (true) {
  await initBundledOnce()

  const samples = 1000
  const warmup = true

  const buffer = benchSync("buffer base64", () => {
    const buffer = Buffer.allocUnsafe(256)
    const result = Buffer.allocUnsafe(256)
    crypto.getRandomValues(buffer)
    const text = buffer.toString("base64")
    const buffer2 = Buffer.from(text, "base64")
    result.set(buffer2, 0)
  }, { samples, warmup })

  const alocer = benchSync("alocer base64", () => {
    const buffer = Buffer.allocUnsafe(256)
    const result = Buffer.allocUnsafe(256)
    crypto.getRandomValues(buffer)
    const text = base64_encode(buffer)
    const slice = base64_decode(text)
    result.set(slice.bytes, 0)
    slice.free()
  }, { samples, warmup })

  alocer.tableAndSummary(buffer)
}

if (true) {
  await initBundledOnce()

  const samples = 1000
  const warmup = true

  const buffer = benchSync("buffer base16", () => {
    const buffer = Buffer.allocUnsafe(256)
    const result = Buffer.allocUnsafe(256)
    crypto.getRandomValues(buffer)
    const text = buffer.toString("hex")
    const buffer2 = Buffer.from(text, "hex")
    result.set(buffer2, 0)
  }, { samples, warmup })

  const alocer = benchSync("alocer base16", () => {
    const buffer = Buffer.allocUnsafe(256)
    const result = Buffer.allocUnsafe(256)
    crypto.getRandomValues(buffer)
    const text = base16_encode_lower(buffer)
    const slice = base16_decode_lower(text)
    result.set(slice.bytes, 0)
    slice.free()
  }, { samples, warmup })

  alocer.tableAndSummary(buffer)
}

if (true) {
  await initBundledOnce()

  const samples = 1000
  const warmup = true

  const scure = benchSync("scure base58", () => {
    const buffer = Buffer.allocUnsafe(32)
    const result = Buffer.allocUnsafe(32)
    crypto.getRandomValues(buffer)
    const text = base58.encode(buffer)
    const buffer2 = base58.decode(text)
    result.set(buffer2, 0)
  }, { samples, warmup })

  const alocer = benchSync("alocer base58", () => {
    const buffer = Buffer.allocUnsafe(32)
    const result = Buffer.allocUnsafe(32)
    crypto.getRandomValues(buffer)
    const text = base58_encode(buffer)
    const slice = base58_decode(text)
    result.set(slice.bytes, 0)
    slice.free()
  }, { samples, warmup })

  alocer.tableAndSummary(scure)
}

if (true) {
  await initBundledOnce()

  const samples = 1000
  const warmup = true

  const buffer = benchSync("buffer base64url", () => {
    const buffer = Buffer.allocUnsafe(256)
    const result = Buffer.allocUnsafe(256)
    crypto.getRandomValues(buffer)
    const text = buffer.toString("base64url")
    const buffer2 = Buffer.from(text, "base64url")
    result.set(buffer2, 0)
  }, { samples, warmup })

  const alocer = benchSync("alocer base64url", () => {
    const buffer = Buffer.allocUnsafe(256)
    const result = Buffer.allocUnsafe(256)
    crypto.getRandomValues(buffer)
    const text = base64url_encode(buffer)
    const slice = base64url_decode(text)
    result.set(slice.bytes, 0)
    slice.free()
  }, { samples, warmup })

  alocer.tableAndSummary(buffer)
}