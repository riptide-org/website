# File Share Platform Front UI

This component is the front-facing UI to users of the File Share Platform. It's a Nuxt.js application and can either be statically built, or run with server-side rendering (SSR).

## Setup

**SSR with Docker (preferred)**

To build and run for node.js serving with SSR, as a Docker container.
As this is intended to sit alongside the File Share Platform Central API, this is the preferred approach as it can be easily conbined with docker compose.

```bash
$ docker build -t fsp-front-ui
$ docker run -p3000:3000 fsp-front-ui
```

**SSR**

To build and run for node.js serving with SSR.

```bash
# Install deps and build
$ yarn
$ yarn build

# Run SSR server on localhost:3000
$ NODE_ENV=production yarn start
```

**Static**

To build the site for pure static serving (no SSR).

```bash
# Install deps and generate
$ yarn
$ NODE_ENV=production yarn generate

# Generated client-side code is in ./dist/
```

## Environment

The following environment variables can be set:
 * `PORT` - Port to listen on. Default `3000`
 * `HOST` - Address to listen on. Default `127.0.0.1`
 * `BROWSER_BASE_URL` - The base URL where `/api/xx` is expected to reside. This is used for requests within the user's browser.
 * `BASE_URL` - The base URL where `/api/xx` is expected to reside, accessible server-side. This is designed for SSR to make API requests locally, or within a container network.