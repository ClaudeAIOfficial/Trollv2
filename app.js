
(() => {
  const gate = document.getElementById("gate");
  const playBtn = document.getElementById("playBtn");
  const broadcast = document.getElementById("broadcast");
  const video = document.getElementById("introVideo");
  const site = document.getElementById("site");
  const bloom = document.getElementById("handoffBloom");
  const replayBtn = document.getElementById("replayBtn");
  const siteStatic = document.getElementById("siteStatic");

  let revealed = false;
  let raf = null;

  function showSite() {
    if (revealed) return;
    revealed = true;

    bloom.classList.add("active");

    setTimeout(() => {
      site.classList.add("visible");
      broadcast.classList.remove("visible");
      video.pause();
      siteStatic.classList.add("hit");
      setTimeout(() => siteStatic.classList.remove("hit"), 260);
    }, 650);
  }

  function watchHandoff() {
    if (!video.duration || !Number.isFinite(video.duration)) {
      raf = requestAnimationFrame(watchHandoff);
      return;
    }

    const remaining = video.duration - video.currentTime;

    // The final Troll "NEXT" press and push-in occupies the last ~2 seconds.
    // Reveal starts during that push so the real website feels like the next channel.
    if (remaining <= 0.82) {
      showSite();
      return;
    }

    raf = requestAnimationFrame(watchHandoff);
  }

  async function startBroadcast() {
    revealed = false;
    bloom.classList.remove("active");
    site.classList.remove("visible");
    gate.classList.remove("visible");
    broadcast.classList.add("visible");

    video.currentTime = 0;
    video.muted = false;

    try {
      await video.play();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(watchHandoff);
    } catch (err) {
      // If a browser interrupts audio playback, the same full-screen video
      // remains visible and the next click resumes it.
      document.addEventListener("click", () => video.play().catch(() => {}), { once: true });
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(watchHandoff);
    }
  }

  playBtn.addEventListener("click", startBroadcast);

  replayBtn.addEventListener("click", () => {
    siteStatic.classList.add("hit");
    setTimeout(() => {
      siteStatic.classList.remove("hit");
      startBroadcast();
    }, 120);
  });

  video.addEventListener("ended", showSite);

  // Debug/deploy preview: add ?site=1 to open directly on the destination site.
  if (new URLSearchParams(location.search).get("site") === "1") {
    gate.classList.remove("visible");
    site.classList.add("visible");
    revealed = true;
  }
})();
