// Generates a branded PDF for every document in content/documents/, so each
// page at /d/[slug] ships with a matching /d/[slug].pdf in the deployed output.
// Run after `pnpm build` (expects ./out to exist). Uses the Playwright CLI so
// no package dependency is needed — CI installs Chromium the same way the
// preview-screenshots workflow does.
import { execSync, spawn } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const outDir = path.join(root, "out")
const docsDir = path.join(root, "content", "documents")
const PORT = 3111

if (!fs.existsSync(outDir)) {
  console.error("./out not found — run `pnpm build` first")
  process.exit(1)
}

const slugs = fs
  .readdirSync(docsDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""))

if (slugs.length === 0) {
  console.log("No documents in content/documents — nothing to do")
  process.exit(0)
}

const server = spawn("npx", ["-y", "serve", outDir, "-l", String(PORT)], {
  stdio: "ignore",
  detached: true,
})

async function waitForServer() {
  for (let i = 0; i < 30; i++) {
    try {
      await fetch(`http://localhost:${PORT}`)
      return
    } catch {
      await new Promise((r) => setTimeout(r, 1000))
    }
  }
  throw new Error(`Static server did not start on port ${PORT}`)
}

try {
  await waitForServer()
  for (const slug of slugs) {
    const pdfPath = path.join(outDir, "d", `${slug}.pdf`)
    fs.mkdirSync(path.dirname(pdfPath), { recursive: true })
    execSync(
      `npx playwright pdf --paper-format A4 --wait-for-timeout 2000 ` +
        `http://localhost:${PORT}/d/${slug} ${pdfPath}`,
      { stdio: "inherit" },
    )
    console.log(`✓ ${path.relative(root, pdfPath)}`)
  }
} finally {
  process.kill(-server.pid)
}
