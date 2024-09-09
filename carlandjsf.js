const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 100,
};

ScrollReveal().reveal(".container .letter-s", {
  duration: 1000,
  delay: 150,
});
ScrollReveal().reveal(".container img", {
  duration: 1000,
  delay: 250,
});
ScrollReveal().reveal(".container .text__left", {
  ...scrollRevealOption,
  origin: "right",
  delay: 200,
});
ScrollReveal().reveal(".container .text__right", {
  ...scrollRevealOption,
  origin: "left",
  delay: 200,
});
ScrollReveal().reveal(".container .explore", {
  duration: 1000,
  delay: 0,
});
ScrollReveal().reveal(".container h5", {
  duration: 1000,
  interval: 500,
  delay: 800,
});



