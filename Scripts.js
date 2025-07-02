document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".Gallery img");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const content = document.createElement("div");
  content.classList.add("overlay-content");

  const zoomedImg = document.createElement("img");
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-button");
  closeBtn.textContent = "✕";

  content.appendChild(closeBtn);
  content.appendChild(zoomedImg);
  overlay.appendChild(content);
  document.body.appendChild(overlay);

  images.forEach(img => {
    img.classList.add("image-thumbnail");
    img.addEventListener("click", () => {
      zoomedImg.src = img.src;
      overlay.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
});
