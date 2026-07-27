// Header shrink shadow on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Mobile drawer
  const burger = document.getElementById('burgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeDrawer = document.getElementById('closeDrawer');
  burger.addEventListener('click', () => {
    drawer.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
  });
  closeDrawer.addEventListener('click', () => {
    drawer.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact form (front-end only demo submission)
  const form = document.getElementById('quoteForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = "Thanks — your request has been noted. We'll be in touch shortly. For urgent jobs, please call (03) 9717 4666.";
    status.classList.add('show', 'ok');
    form.reset();
  });
