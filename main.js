var menuBurger = document.querySelector("i.bar");
function showsidebar() {
  const sidbar = document.querySelector(".sidebar");
  sidbar.style.display = "flex";
  menuBurger.setAttribute('style', 'display:none!important;');
}
function hidesidebar() {
  const sidbar = document.querySelector(".sidebar");
  sidbar.style.display = "none";
  menuBurger.setAttribute('style', 'display:block!important;');
}
function hiddenTXT() {
  document.getElementById("hiddenTXT").textContent = "there's nothing we can do!";
}
function aayContact() {
  alert("+98 902-536-0424");
}
function amzContact() {
  alert("+98 939-559-0365 \n+98 902-736-1266");
}
function arcContact() {
  alert("+98 905-173-8098");
}
function ampContact() {
  alert("09933862706");
}
function aContact() {
  alert("+company");
}

//slideshow
document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const counter = document.getElementById("current");
  const slideshow = document.querySelector(".slideshow");

  let currentIndex = 0;
  let autoSlide;

  // Check that slideshow elements exist
  if (!slides.length || !prevBtn || !nextBtn) {
    console.error("Slideshow elements were not found!");
    return;
  }

  // Display a slide
  function showSlide(index) {

    slides.forEach(slide => {
      slide.classList.remove("active");
    });

    dots.forEach(dot => {
      dot.classList.remove("active");
    });

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add("active");

    if (dots[currentIndex]) {
      dots[currentIndex].classList.add("active");
    }

    if (counter) {
      counter.textContent = String(currentIndex + 1).padStart(2, "0");
    }
  }

  // Next slide
  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  // Previous slide
  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Automatic slideshow
  function startAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
  }

  // Reset timer
  function resetTimer() {
    startAutoSlide();
  }

  // Arrow buttons
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetTimer();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
      nextSlide();
      resetTimer();
    }

    if (event.key === "ArrowLeft") {
      prevSlide();
      resetTimer();
    }

  });

  // Click indicators
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetTimer();
    });
  });

  // Pause on hover
  if (slideshow) {

    slideshow.addEventListener("mouseenter", () => {
      clearInterval(autoSlide);
    });

    slideshow.addEventListener("mouseleave", () => {
      startAutoSlide();
    });

  }

  // Initialize slideshow
  showSlide(0);
  startAutoSlide();
});