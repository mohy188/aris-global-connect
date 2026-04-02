import path from "node:path";
import { pathToFileURL } from "node:url";

let serverEntryPromise;

async function getServerEntry() {
  if (!serverEntryPromise) {
    const serverFile = path.join(process.cwd(), "dist", "server", "server.js");
    serverEntryPromise = import(pathToFileURL(serverFile).href).then((mod) => mod.default);
  }

  return serverEntryPromise;
}

async function readRequestBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return chunks.length > 0 ? Buffer.concat(chunks) : undefined;
}

function buildHeaders(nodeHeaders) {
  const headers = new Headers();

  for (const [key, value] of Object.entries(nodeHeaders)) {
    if (value == null) continue;

    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(key, item);
      }
    } else {
      headers.set(key, value);
    }
  }

  return headers;
}

function applyResponseHeaders(response, res) {
  const setCookie = response.headers.getSetCookie?.();
  if (setCookie?.length) {
    res.setHeader("set-cookie", setCookie);
  }

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") return;
    res.setHeader(key, value);
  });
}

export default async function handler(req, res) {
  try {
    const serverEntry = await getServerEntry();

    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host;
    const url = `${protocol}://${host}${req.url}`;

    const method = req.method || "GET";
    const hasBody = method !== "GET" && method !== "HEAD";
    const body = hasBody ? await readRequestBody(req) : undefined;

    const request = new Request(url, {
      method,
      headers: buildHeaders(req.headers),
      body,
    });

    const response = await serverEntry.fetch(request);

    res.statusCode = response.status;
    applyResponseHeaders(response, res);

    if (!response.body) {
      res.end();
      return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (error) {
    console.error("Vercel render function failed:", error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}
