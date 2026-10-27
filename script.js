
const downloadButton = document.getElementById("download-button");
const modal = document.getElementById("modal");

const openModal = () => {
  modal.hidden = false;
  document.getElementById("modal-close").focus();
};

const closeModal = () => {
  modal.hidden = true;
  downloadButton.focus();
};

// Download NOVA Client from GitHub Releases
downloadButton.addEventListener("click", () => {
  window.location.href =
    "https://github.com/Ddoxed/Nova/releases/download/V2.4.0/NovaInstaller64x.exe";
});

// Close the existing modal
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-ok").addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

// Update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
document.getElementById("menu-button").addEventListener("click", () => {
  document.querySelector(".nav nav").classList.toggle("open");
});

document.querySelectorAll(".nav nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav nav").classList.remove("open");
  });
});
