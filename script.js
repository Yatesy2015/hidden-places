const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");
const waitlistForm = document.getElementById("waitlistForm");
const emailInput = document.getElementById("emailInput");
const interestType = document.getElementById("interestType");
const formMessage = document.getElementById("formMessage");

menuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});

waitlistForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const interest = interestType.value;

  formMessage.textContent = `Thanks — ${email} has been added to the Hidden Places waitlist.`;

  console.log("Waitlist signup:", {
    email,
    interest
  });

  waitlistForm.reset();
});