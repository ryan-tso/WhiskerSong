/* ============================================================
   WhiskerSong — shared scripts
   Scroll up/down indicator behavior, shared across pages that
   include #scrollDown / #scrollUp. Pages without them are a
   no-op. Page-specific JS (FAQ accordion, Services reveal)
   stays inline on those pages.
   ============================================================ */
(function () {
  const scrollDown = document.getElementById('scrollDown');
  const scrollUp = document.getElementById('scrollUp');
  if (!scrollDown || !scrollUp) return;

  const sections = Array.from(document.querySelectorAll('section, footer'));

  function getPreviousSection() {
    const threshold = window.scrollY - 80;
    const above = sections.filter((s) => s.offsetTop < threshold);
    return above.length ? above[above.length - 1] : null;
  }

  scrollUp.addEventListener('click', () => {
    const prev = getPreviousSection();
    window.scrollTo({ top: prev ? prev.offsetTop : 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    scrollUp.classList.toggle('visible', scrolled > 120);
    scrollDown.classList.toggle('hidden', scrolled >= maxScroll - 60);
  });
})();
