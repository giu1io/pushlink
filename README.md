# Push Link

Very small application to share a link between 2 devices using bookmarklets.

Frontend (`push-link-fe`) is a Nuxt spa, meant to be deployed on Cloudflare Pages.

Backend (`push-link-worker`) is a CloudFlare worker that saves user input on Cloudflare KV.

This project was mostly an excuse to play with Pages and Workers on Cloudflare.

You can see a working version of the website at [pushlink.ml](https://pushlink.ml)