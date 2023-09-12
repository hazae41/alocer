<div>
  <img align="right" width="128" src="https://user-images.githubusercontent.com/4405263/264696872-ee6d5222-80f9-4dcb-8cb4-5e81166e25e7.png"/>
  <p></p>
</div>

# Alocer

WebAssembly port of Base64, Base64URL, Base16, and Base58 encoding algorithms

```bash
npm i @hazae41/alocer
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/alocer) • [**Deno Module 🦖**](https://deno.land/x/alocer) • [**Next.js CodeSandbox 🪣**](https://codesandbox.io/p/github/hazae41/alocer-example-next)

## Algorithms
- Constant-time Base64 from RustCrypto (base64ct)
- Constant-time Base64URL from RustCrypto (base64ct)
- Constant-time Base16 (Hex) from RustCrypto (base16ct)
- Fastest Base58 from Nemo157 (bs58)

## Features
- Reproducible building
- Pre-bundled and streamed
- Zero-copy memory slices

## Building

### Unreproducible building

You need to install [Rust](https://www.rust-lang.org/tools/install)

Then, install [wasm-pack](https://github.com/rustwasm/wasm-pack)

```bash
cargo install wasm-pack
```

Finally, do a clean install and build

```bash
npm ci && npm run build
```

### Reproducible building

You can build the exact same bytecode using Docker, just be sure you're on a `linux/amd64` host

```bash
docker compose up --build
```

Then check that all the files are the same using `git status`

```bash
git status --porcelain
```

If the output is empty then the bytecode is the same as the one I commited

### Automated checks

Each time I commit to the repository, the GitHub's CI does the following:
- Clone the repository
- Reproduce the build using `docker compose up --build`
- Throw an error if the `git status --porcelain` output is not empty

Each time I release a new version tag on GitHub, the GitHub's CI does the following:
- Clone the repository
- Do not reproduce the build, as it's already checked by the task above
- Throw an error if there is a `npm diff` between the cloned repository and the same version tag on NPM

If a version is present on NPM but not on GitHub, do not use!
