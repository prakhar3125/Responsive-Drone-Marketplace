console.log("Hello world!");

const myName = "Prakhar";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
function validateForm() {
  var name = document.forms["sign-up"]["full-name"].value.trim();
  var phone = document.forms["sign-up"]["phone"].value;
  var selectWhere = document.forms["sign-up"]["select-where"].value;

  if (name === "" || phone === "" || selectWhere === "") {
    alert("All fields must be filled out");
    return false;
  } else if (!/^[a-zA-Z\s]*$/.test(name)) {
    alert("Name should only contain letters and spaces");
    return false;
  } else if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    alert("Phone number should be 10 digits");
    return false;
  } else {
    window.location.href = "index2.html";
    return false;
  }
}

function handleFormSubmission() {
  document
    .querySelector(".checkout-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value;
      var cardNumber = document.getElementById("cardNumber").value;
      var expiryDate = document.getElementById("expiryDate").value;
      var cvc = document.getElementById("cvc").value;

      if (!/^[a-zA-Z\s]*$/.test(name)) {
        alert("Name should contain only text.");
        return false;
      }

      if (!/^\d{16}$/.test(cardNumber)) {
        alert("Card number should be a 16 digit number.");
        return false;
      }

      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        alert("Expiry date should be of format MM/YY.");
        return false;
      }

      if (!/^\d{3}$/.test(cvc)) {
        alert("CVC should be a 3 digit number.");
        return false;
      }

      alert("Form submitted successfully!");
      return true;
    });
}

handleFormSubmission();
