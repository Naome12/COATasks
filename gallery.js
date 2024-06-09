document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
          // Show the "Know More" link when hovering
          const knowMoreLink = item.querySelector(".know-more");
          if (knowMoreLink) {
              knowMoreLink.style.display = "inline-block";
              knowMoreLink.style.opacity = "1";
              knowMoreLink.style.transform = "translateY(0)";
          }
      });

      // Add event listener for mouseleave (hover out)
      item.addEventListener("mouseleave", () => {
          const knowMoreLink = item.querySelector(".know-more");
          if (knowMoreLink) {
              knowMoreLink.style.display = "none";
              knowMoreLink.style.opacity = "0";
              knowMoreLink.style.transform = "translateY(10px)";
          }
      });
  });
});
