a document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const themeToggle = document.getElementById("themeToggle");
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
    const contactForm = document.querySelector("form");
    const servicesGrid = document.querySelector(".services-grid");
    const orderNowButton = document.querySelector(".cta-button");
  
    // 1. Sticky Navigation & Active Section Highlighting
    const navBar = document.querySelector("header nav");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === #${entry.target.id}) {
              link.classList.add("active");
            }
          });
        }
      });.
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navBar.classList.add("sticky");
      } else {
        navBar.classList.remove("sticky");
      }
    });
  
    //  Handle Switch Theme Toggle
    const savedTheme = localStorage.getItem("theme") || "dark";
  
    function applyTheme(theme) {
      if (theme === "dark") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
      }
    }
  
    applyTheme(savedTheme);
  
    themeToggle.addEventListener("click", () => {
      const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  
    //  Handle "Order Now" Button Click
    orderNowButton.addEventListener("click", () => {
      alert("Redirecting to order page...");
      // You can replace this with window.location.href to navigate
      window.location.href = "/order"; // Change this URL to your actual order page
    });
  
    //  Dynamic Services Data
    const services = [
      {
        image: "https://i.pinimg.com/736x/26/ea/ae/26eaae30d3b98854e533b0d27712c9a6.jpg",
        title: "Burgers",
        description: "Juicy, flavorful burgers made fresh.",
      },
      {
        image: "https://i.pinimg.com/736x/80/e5/9d/80e59ddd335067ac9aad370dc04917b9.jpg",
        title: "Pizzas",
        description: "Delicious pizzas with a variety of toppings.",
      },
      {
        image: "https://i.pinimg.com/736x/81/74/c8/8174c8264c74effa504b7613178887d6.jpg",
        title: "Cold Drinks",
        description: "Refreshing beverages to complement your meal.",
      },
      {
        image: "https://i.pinimg.com/736x/84/6c/16/846c16f31decfedef0f96bf3c9a61dbf.jpg",
        title: "Ice Cream",
        description: "Sweet, creamy treats for dessert lovers.",
      },
    ];
  
    function renderServices() {
      servicesGrid.innerHTML = "";
      services.forEach((service) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${service.image}" alt="${service.title}">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        `;
        servicesGrid.appendChild(card);
      });
    }
    renderServices();
  });  