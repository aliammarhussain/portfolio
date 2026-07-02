export type RevealVariant = "up" | "fade" | "scale" | "blur" | "left" | "right";

export function initMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal], [data-stagger-group]").forEach((el) => {
      el.classList.add("is-visible");
    });
    return;
  }

  initPageEntrance();
  initRevealObserver();
  initStaggerGroups();
  initSmoothAnchors();
  initNavUnderline();
}

function initPageEntrance() {
  requestAnimationFrame(() => {
    document.body.classList.add("is-loaded");
  });
}

function initRevealObserver() {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add("is-visible");
        observer.unobserve(el);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -48px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

function initStaggerGroups() {
  const groups = document.querySelectorAll<HTMLElement>("[data-stagger-group]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const group = entry.target as HTMLElement;
        group.classList.add("is-visible");
        observer.unobserve(group);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
  );

  groups.forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");
    items.forEach((item, index) => {
      item.style.setProperty("--stagger-index", String(index));
    });
    observer.observe(group);
  });
}

function initSmoothAnchors() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initNavUnderline() {
  const navItems = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
  navItems.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      navItems.forEach((l) => l.classList.remove("nav-link-active"));
      link.classList.add("nav-link-active");
    });
  });

  const nav = document.querySelector(".nav-list");
  nav?.addEventListener("mouseleave", () => {
    const active = document.querySelector('.nav-link[aria-current="true"]');
    navItems.forEach((l) => l.classList.remove("nav-link-active"));
    active?.classList.add("nav-link-active");
  });
}
