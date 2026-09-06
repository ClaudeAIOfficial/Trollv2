
# Troll on Robinhood

This build changes the ending flow:

1. Visitor clicks **START TRANSMISSION**.
2. The 30-second prank intro video plays full-screen with sound.
3. After the last scene ends, the screen cuts to a title card:
   **Troll on Robinhood**
4. After that, it opens a very simple landing page:
   - full-screen smug Troll pose
   - X logo button
   - GMGN logo button

## Files
- `index.html`
- `styles.css`
- `app.js`
- `assets/troll.png`
- `assets/gmgn.png`
- `assets/x.svg`

## Links to replace if needed
- X: `https://x.com`
- GMGN: `https://gmgn.ai/?chain=robinhood`

## Intro video source
The full-screen intro video is currently loaded from:
https://d8j0ntlcm91z4.cloudfront.net/user_3DFeZk0LqgiFcue7STVOyiCo13m/hf_20260906_112355_79fe8c8d-9d50-4336-9ff3-762136692f84.mp4

If you want the site fully self-hosted, download the MP4 into `assets/intro.mp4`
and replace the `src` on `#introVideo` inside `index.html`.


## Latest update
- Replaced the landing-page Troll with the down-pointing pose so the hands line up with the X and GMGN buttons.
- Widened and repositioned the buttons to sit under each pointing hand.
