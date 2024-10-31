// utility.js

// Element toggle function
export const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// Sidebar toggle functionality
export const setupSidebarToggle = (sidebar, sidebarBtn) => {
  sidebarBtn.addEventListener("click", () => {sidebar.classList.toggle("active");});
};
// page.classList.toggle("active", isActive);
// Modal toggle function for testimonials
export const toggleModal = (modalContainer, overlay) => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Open testimonials modal
export const openTestimonialsModal = (testimonial, modalImg, modalTitle, modalText, modalContainer, overlay) => {
  const avatar = testimonial.querySelector("[data-testimonials-avatar]");
  modalImg.src = avatar.src;
  modalImg.alt = avatar.alt;
  modalTitle.innerHTML = testimonial.querySelector("[data-testimonials-title]").innerHTML;
  modalText.innerHTML = testimonial.querySelector("[data-testimonials-text]").innerHTML;

  toggleModal(modalContainer, overlay);
};

// Setup testimonials modal event listeners
export const setupTestimonialsModal = (testimonialsItems, modalImg, modalTitle, modalText, modalContainer, overlay, modalCloseBtn) => {
  testimonialsItems.forEach((item) => {
    item.addEventListener("click", () => openTestimonialsModal(item, modalImg, modalTitle, modalText, modalContainer, overlay));
  });

  modalCloseBtn.addEventListener("click", () => toggleModal(modalContainer, overlay));
  overlay.addEventListener("click", () => toggleModal(modalContainer, overlay));
};

// Custom select function
export const setupCustomSelect = (select, selectItems, selectValue, filterFunc) => {
  select.addEventListener("click", () => elementToggleFunc(select));

  selectItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectValue.innerText = item.innerText;
      elementToggleFunc(select);
      filterFunc(item.innerText.toLowerCase());
    });
  });
};

// Filter function
export const filterFunc = (filterItems, selectedValue) => {
  filterItems.forEach((item) => {
    const isActive = selectedValue === "all" || selectedValue === item.dataset.category;
    item.classList.toggle("active", isActive);
  });
};

// Setup filter button events
export const setupFilterButtons = (filterBtns, selectValue, filterFunc) => {
  let lastClickedBtn = filterBtns[0];

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedValue = btn.innerText.toLowerCase();
      selectValue.innerText = btn.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      btn.classList.add("active");
      lastClickedBtn = btn;
    });
  });
};

// Contact form validation
export const setupFormValidation = (form, formInputs, formBtn) => {
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      formBtn.disabled = !form.checkValidity();
    });
  });
};

// Navigation setup
export const setupNavigation = (navigationLinks, pages) => {
  navigationLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      const selectedPage = link.innerHTML.toLowerCase();
      pages.forEach((page, i) => {
        const isActive = selectedPage === page.dataset.page;
        page.classList.toggle("active", isActive);
        navigationLinks[i].classList.toggle("active", isActive);
      });
      window.scrollTo(0, 0);
    });
  });
};
