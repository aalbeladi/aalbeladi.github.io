// Current year in the footer
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

// CV links: point to cv.pdf automatically once that file is uploaded to the repo
const cvLinks = document.querySelectorAll('[data-cv]');
if (cvLinks.length) {
  fetch('cv.pdf', { method: 'HEAD' })
    .then(res => {
      if (!res.ok) return;
      cvLinks.forEach(a => {
        a.href = 'cv.pdf';
        a.textContent = 'CV (PDF)';
        a.hidden = false;
        if (a.parentElement.tagName === 'LI') a.parentElement.hidden = false;
      });
    })
    .catch(() => {});
}
