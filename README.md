# TROLL — Website Handoff Build

This version is designed around the finished 30-second Higgsfield prank video.

## Experience
1. Visitor clicks **START TRANSMISSION** once. This is required for unmuted browser video playback.
2. The 30-second prank anthology fills the entire viewport.
3. During the **final Troll NEXT / zoom-into-screen move**, the real website begins revealing.
4. The last push into the cinema screen becomes the transition into the live website.
5. The destination page is full-screen, minimal, uncanny, and has a working **REPLAY BROADCAST** action.

## Handoff timing
`app.js` starts the website reveal around the final 0.82 seconds of the video.  
If the generated final push lands earlier/later in a future render, adjust:

```js
if (remaining <= 0.82)
```

## Deploy
Static site — no build step.

GitHub Pages / Netlify / Cloudflare Pages:
- upload this folder
- serve `index.html`

Vercel:
- import repository
- Framework Preset: **Other**
- no build command required

## Video
The intro uses the completed Higgsfield 30-second render:
https://d8j0ntlcm91z4.cloudfront.net/user_3DFeZk0LqgiFcue7STVOyiCo13m/hf_20260906_112355_79fe8c8d-9d50-4336-9ff3-762136692f84.mp4

For a fully self-hosted deployment, download the MP4 into `assets/intro.mp4` and replace the `<video src>` in `index.html`.
