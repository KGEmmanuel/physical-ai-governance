/* Static server for aigovernors.org with host canonicalization:
 *  - physicalai.cognitagrc.io/*  -> 301 https://aigovernors.org/*   (legacy links keep working)
 *  - www.aigovernors.org/*       -> 301 https://aigovernors.org/*
 *  - unknown paths fall back to index.html (single-page site)
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;
const CANONICAL_HOST = "aigovernors.org";
const REDIRECT_HOSTS = new Set(["physicalai.cognitagrc.io", "www.aigovernors.org"]);

const MIME = {
  ".html": "text/html; charset=utf-8", ".md": "text/markdown; charset=utf-8",
  ".css": "text/css", ".js": "text/javascript", ".json": "application/json",
  ".xml": "application/xml", ".txt": "text/plain; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".mp4": "video/mp4", ".pdf": "application/pdf",
};

http.createServer((req, res) => {
  const host = (req.headers.host || "").split(":")[0].toLowerCase();
  if (REDIRECT_HOSTS.has(host)) {
    res.writeHead(301, { Location: `https://${CANONICAL_HOST}${req.url}` });
    return res.end();
  }
  let urlPath;
  try { urlPath = decodeURIComponent((req.url || "/").split("?")[0]); }
  catch { res.writeHead(400); return res.end("bad request"); }
  let filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end("forbidden"); }
  if (urlPath === "/" || !path.extname(filePath)) {
    // extensionless routes: /governors -> governors.html if it exists, else the single-page index
    const htmlPath = filePath.replace(/[\/\\]+$/, "") + ".html";
    filePath = fs.existsSync(htmlPath) ? htmlPath : path.join(ROOT, "index.html");
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return fs.readFile(path.join(ROOT, "index.html"), (e2, idx) => {
        if (e2) { res.writeHead(404); return res.end("not found"); }
        res.writeHead(200, { "Content-Type": MIME[".html"] });
        res.end(idx);
      });
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "public, max-age=300",
    });
    res.end(data);
  });
}).listen(PORT, "0.0.0.0", () => console.log(`aigovernors.org static server on :${PORT}`));
