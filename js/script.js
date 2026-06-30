
// BURGER MENU
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}


// HEADER BG ON SCROLL

const header = document.getElementById("header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}




// FORM VALIDATION

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (
      !name.value.trim() ||
      !email.value.trim() ||
      !password.value.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    if (!emailRegex.test(email.value)) {
      alert("Invalid email");
      return;
    }

    if (!passwordRegex.test(password.value)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter and one number"
      );
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
  });
}


// SHOW / HIDE PASSWORD

const togglePassword =
  document.getElementById("togglePassword");

const passwordInput =
  document.getElementById("password");

if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      togglePassword.textContent = "Show";
    }
  });
}


// SCROLL TO TOP

const scrollBtn =
  document.getElementById("scrollTop");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}


// COOKIE 

const cookieBox =
  document.getElementById("cookieBox");

const acceptCookie =
  document.getElementById("acceptCookie");

if (cookieBox && acceptCookie) {
  if (localStorage.getItem("cookieAccepted")) {
    cookieBox.style.display = "none";
  }

  acceptCookie.addEventListener("click", () => {
    localStorage.setItem(
      "cookieAccepted",
      "true"
    );

    cookieBox.style.display = "none";
  });
}