
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

// Download the actual installer
downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "/downloads/NOVA-Client-Setup.exe";
  link.download = "NOVA-Client-Setup.exe";
  document.body.appendChild(link);
  link.click();
  link.remove();
});

// Close the old modal if needed
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-ok").addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("menu-button").addEventListener("click", () => {
  document.querySelector(".nav nav").classList.toggle("open");
});

document.querySelectorAll(".nav nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav nav").classList.remove("open");
  });
});

