document.addEventListener("DOMContentLoaded", function () {
    const serviceBoxes = document.querySelectorAll(".underline");
  
    serviceBoxes.forEach((box) => {
      const accordionBtn = box.querySelector(".accordion-btn");
      const accordion = box.querySelector(".accordion");
  
      accordionBtn.addEventListener("click", function () {
        // Close all other accordions
        serviceBoxes.forEach((otherBox) => {
          const otherAccordion = otherBox.querySelector(".accordion");
          if (otherBox !== box) {
            otherAccordion.style.height = "0"; // Close
            otherAccordion.classList.remove("active");
          }
        });
  
        // Toggle the current accordion
        if (accordion.classList.contains("active")) {
          accordion.style.height = "0"; // Close
          accordion.classList.remove("active");
        } else {
          accordion.style.height = "max-content"; // Open
          accordion.classList.add("active");
        }
      });
    });
  });