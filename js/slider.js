var splide = new Splide(".splide", {
  type: "loop",
  perPage: 5,
  gap: "3rem",
  focus: "center",
  pagination: false,
  drag: "free",
  autoplay: true,
  breakpoints: {
    768: {
      perPage: 1,
    },
  },
});
splide.mount();
