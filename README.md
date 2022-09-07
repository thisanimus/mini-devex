
# Mini Devex
A miniature dev environment for building websites.
- browsersync for hot-reload on changes.
- SASS for... well SASS.
- Rollup for JS

## Installation
Install the project dependencies
```bash
$ npm i 
```
## Configuration
As-is the config will watch everyhting in the `/src` dir.  you can customize this in the `watch:sync` script.

The script serves `index.html` by default, but if you're using a local dev env with a proxied domain (for instance, a Wordpress dev environment using Local by Flywheel), you can add options for `--https`, `--proxy`, and `listen` to the `watch:sync` script to integrate the local server.

```bash
"watch:sync": "browser-sync start --https --proxy 'https://YOURDOMAIN.local' --listen 'YOURDOMAIN.local' --files '*/**/.php', 'src/**/**'",
```

## Run
```bash
$ npm run start
```