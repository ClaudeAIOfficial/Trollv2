
(() => {
  const gate = document.getElementById('gate');
  const playBtn = document.getElementById('playBtn');
  const broadcast = document.getElementById('broadcast');
  const video = document.getElementById('introVideo');
  const titleCard = document.getElementById('titleCard');
  const site = document.getElementById('site');

  let stage = 'gate';

  async function startTransmission() {
    stage = 'video';
    gate.classList.remove('is-visible');
    site.classList.remove('is-visible');
    titleCard.classList.remove('is-visible');
    broadcast.classList.add('is-visible');
    video.currentTime = 0;
    video.muted = false;
    try {
      await video.play();
    } catch (e) {
      document.addEventListener('click', () => video.play().catch(() => {}), { once: true });
    }
  }

  function showTitleThenSite() {
    if (stage === 'done') return;
    stage = 'title';
    broadcast.classList.remove('is-visible');
    titleCard.classList.add('is-visible');
    setTimeout(() => {
      titleCard.classList.remove('is-visible');
      site.classList.add('is-visible');
      stage = 'done';
    }, 2300);
  }

  playBtn.addEventListener('click', startTransmission);
  video.addEventListener('ended', showTitleThenSite);

  // Fallback if the browser slightly cuts the end event timing.
  video.addEventListener('timeupdate', () => {
    if (video.duration && video.currentTime >= Math.max(0, video.duration - 0.08)) {
      showTitleThenSite();
    }
  });
})();
