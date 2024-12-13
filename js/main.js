// hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-infoR .nav-links ul");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log(navMenu.classList);
});

document.querySelectorAll(".nav-infoR .nav-links ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Swiper Shop
if (document.body.id === "main") {
  let shopSwiper = new Swiper("#swiper1", {
    slidesPerView: 3,
    spaceBetween: -250,
    loop: true,
    pagination: {
      el: "#sw1",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      1300: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });
}

// Accordion

let items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    let activeItems = document.querySelectorAll(".item.active");

    // Close any other active items
    activeItems.forEach((active) => {
      if (active !== item) {
        let activeBody = active.querySelector(".body");
        activeBody.style.maxHeight = 0;
        active.classList.remove("active");
      }
    });

    // Toggle the current item
    item.classList.toggle("active");

    let elementBody = item.querySelector(".body"); // Get the clicked item's body
    if (item.classList.contains("active")) {
      elementBody.style.maxHeight = elementBody.scrollHeight + "px";
    } else {
      elementBody.style.maxHeight = 0;
    }
  });
});

// Topics
if (document.body.id === "main") {
  var topics = new Swiper("#swiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // Your Need

  var yourNeed = new Swiper("#swiper3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 70,
      depth: 150,
      modifier: 3,
      slideShadows: false,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: "#sw3",
      clickable: true,
    },
    navigation: {
      nextEl: "#bt1",
      prevEl: "#bt12",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });

  // Feed Back

  var feedBack = new Swiper("#swiper4", {
    effect: "cards",
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    cardEffect: {
      slideShadows: true,
      rotate: 20,
      depth: 100,
    },
    navigation: {
      nextEl: "#sw42",
      prevEl: "#sw4",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 2,
      },

      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
}

// Active Tags
document.querySelectorAll(".tag").forEach((tag) => {
  tag.addEventListener("click", () => {
    document
      .querySelectorAll(".tag")
      .forEach((t) => t.classList.remove("active"));
    tag.classList.add("active");
  });
});

// Choose Image
function loadImage(event) {
  const file = event.target.files[0];

  if (file && file.type.startsWith("image/")) {
    const output = document.getElementById("profileImg");
    output.src = URL.createObjectURL(file);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  } else {
    alert("Please select a valid image file.");
  }
}

// Show Password
if (document.body.id === "setting") {
  let cPass = document.getElementById("cPass");
  let pass = document.getElementById("Pass");
  let pass2 = document.getElementById("Pass2");
  let strength = document.getElementById("strength");
  let msg = document.getElementById("msg");
  let matchMsg = document.getElementById("msg2");
  let matchStatus = document.getElementById("match-status");
  let eyeIcons = document.querySelectorAll(".fa-eye");

  function togglePassword(inputField, eyeIcon) {
    if (inputField.type === "password") {
      inputField.setAttribute("type", "text");
      eyeIcon.className = "fa-regular fa-eye-slash";
    } else {
      inputField.setAttribute("type", "password");
      eyeIcon.className = "fa-regular fa-eye";
    }
  }

  eyeIcons.forEach((eyeIcon, index) => {
    eyeIcon.addEventListener("click", () => {
      if (index === 0) togglePassword(cPass, eyeIcon);
      if (index === 1) togglePassword(pass, eyeIcon);
      if (index === 2) togglePassword(pass2, eyeIcon);
    });
  });

  pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
      msg.style.display = "block";
    } else {
      msg.style.display = "none";
    }

    if (pass.value.length < 4) {
      strength.innerHTML = "ضعيفة";
      pass.style.borderColor = "#ff5925";
      msg.style.color = "#ff5925";
      msg.style.fontSize = "13px";
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
      strength.innerHTML = "متوسطة";
      pass.style.borderColor = "blue";
      msg.style.color = "blue";
      msg.style.fontSize = "13px";
    } else if (pass.value.length >= 8) {
      strength.innerHTML = "قوية";
      pass.style.borderColor = "var(--main-color)";
      msg.style.color = "var(--main-color)";
      msg.style.fontSize = "13px";
    }
  });

  pass2.addEventListener("input", () => {
    if (pass2.value.length > 0) {
      matchMsg.style.display = "block";
    } else {
      matchMsg.style.display = "none";
    }

    if (pass.value === pass2.value) {
      matchStatus.innerHTML = "متطابقة";
      pass2.style.borderColor = "#26d730";
      matchMsg.style.color = "#26d730";
      matchMsg.style.fontSize = "13px";
    } else {
      matchStatus.innerHTML = "غير متطابقة";
      pass2.style.borderColor = "#ff5925";
      matchMsg.style.color = "#ff5925";
      matchMsg.style.fontSize = "13px";
    }
  });
}

// ====Z====

document.querySelectorAll(".nav-infoR.nav-links ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// cart quantity
// Remove button functionality
document.querySelectorAll(".remove-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const row = e.target.closest("tr"); // Find the row to delete
    row.remove(); // Remove the row from the table
  });
});

// Quantity adjustment remains the same
document.querySelectorAll(".quantity-controls button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const input = e.target.parentElement.querySelector("input");
    let value = parseInt(input.value);

    if (e.target.classList.contains("increase")) {
      value++;
    } else if (e.target.classList.contains("decrease") && value > 1) {
      value--;
    }

    input.value = value;
    updateSubtotal(e.target.closest("tr"));
  });
});

function updateSubtotal(row) {
  const price = parseFloat(
    row.querySelector("td:nth-child(2)").textContent.replace("$", "")
  );
  const quantity = parseInt(row.querySelector("input").value);
  const subtotal = row.querySelector("td:nth-child(4)");
  subtotal.textContent = `$${(price * quantity).toFixed(2)}`;
}

function updateSubtotal(row) {
  const price = parseFloat(
    row.querySelector("td:nth-child(2)").textContent.replace("$", "")
  );
  const quantity = parseInt(row.querySelector("input").value);
  const subtotal = row.querySelector("td:nth-child(4)");
  subtotal.textContent = `$${(price * quantity).toFixed(2)}`;
}

function selectImage(buttonId, newSrc) {
  document.getElementById("mainImg").src = newSrc;

  document.querySelectorAll(".gallery-buttons img").forEach((img) => {
    img.classList.remove("selected");
  });

  document.getElementById(buttonId).classList.add("selected");
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("singleProductPage.html")) {
    let quantityValue = document.getElementById("quantity-value");
    let decreaseBtn = document.getElementById("dec-btn");
    let increaseBtn = document.getElementById("inc-btn");

    if (decreaseBtn && increaseBtn && quantityValue) {
      let start = 1;

      function decreaseQuantity() {
        if (start > 1) {
          start--;
          updateDisplay();
        }
      }

      function increaseQuantity() {
        start++;
        updateDisplay();
      }

      decreaseBtn.onclick = decreaseQuantity;
      increaseBtn.onclick = increaseQuantity;

      function updateDisplay() {
        quantityValue.textContent = `${start} كيلو`;
      }

      updateDisplay();
    } else {
      console.error("One or more elements are missing on the checkout page!");
    }
  }
});

// single page slider
if (document.body.id === "singleProduct") {
  var sw10 = new Swiper(".singlePageSwiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
// single page slider
