(() => {
  const heroSelector = [
    ".service-hero",
    ".hero-bcd",
    ".breadcrump-sec.hero-publishing",
    ".bde-page .hero",
    ".ble-page .hero",
    ".cpb-pub-page .hero",
    ".cpb-page .hero",
    ".hero[data-service-hero-form]",
  ].join(", ");
  const heroes = document.querySelectorAll(heroSelector);

  const fieldsMarkup = (fieldClass) => `
    <div class="${fieldClass}">
      <label for="service-published-before">Published before?</label>
      <select id="service-published-before" name="published_before" required>
        <option value="" disabled selected>Select</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div class="${fieldClass}">
      <label for="service-book-type">Type of book</label>
      <select id="service-book-type" name="book_type" required>
        <option value="" disabled selected>Select genre</option>
        <option>Fiction</option>
        <option>Non-Fiction</option>
        <option>Memoir / Autobiography</option>
        <option>Biography</option>
        <option>Business</option>
        <option>Self-Help</option>
        <option>How-To</option>
        <option>Inspirational</option>
        <option>Spiritual / Religious</option>
        <option>Children's</option>
        <option>Art / Photography</option>
        <option>Cookbook</option>
        <option>Other</option>
      </select>
    </div>
    <fieldset class="service-form-options">
      <legend>What services are you looking for?</legend>
      <div class="service-form-options-grid">
        <label><input type="checkbox" name="services" value="Ghostwriting"> Ghostwriting</label>
        <label><input type="checkbox" name="services" value="Book Editing"> Book Editing</label>
        <label><input type="checkbox" name="services" value="Proofreading"> Proofreading</label>
        <label><input type="checkbox" name="services" value="Cover Design"> Cover Design</label>
        <label><input type="checkbox" name="services" value="Interior Formatting"> Interior Formatting</label>
        <label><input type="checkbox" name="services" value="Illustration"> Illustration</label>
        <label><input type="checkbox" name="services" value="Book Publishing"> Book Publishing</label>
        <label><input type="checkbox" name="services" value="Author Website"> Author Website</label>
        <label><input type="checkbox" name="services" value="Book Marketing"> Book Marketing</label>
        <label><input type="checkbox" name="services" value="Audiobook Production"> Audiobook Production</label>
      </div>
    </fieldset>
    <div class="${fieldClass}">
      <label for="service-lead-name">Name</label>
      <input id="service-lead-name" name="name" type="text" autocomplete="name" required placeholder="Jane Smith">
    </div>
    <div class="${fieldClass}">
      <label for="service-lead-phone">Phone</label>
      <input id="service-lead-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required placeholder="(555) 123-4567">
    </div>
    <div class="${fieldClass}">
      <label for="service-lead-email">Email</label>
      <input id="service-lead-email" name="email" type="email" autocomplete="email" required placeholder="you@example.com">
    </div>
    <label class="service-form-consent">
      <input type="checkbox" name="consent" required>
      <span>I agree to be contacted by phone, SMS, or email about my inquiry. Msg &amp; data rates may apply; reply STOP to opt out. <a href="/terms-conditions/" target="_blank" rel="noopener">Terms</a> &amp; <a href="/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a>.</span>
    </label>`;

  const updateForm = (form, siteUrl) => {
    const fieldClass = form.classList.contains("modal-form")
      ? "modal-field"
      : "input-group-custom";
    const submitButton = form.querySelector('button[type="submit"]');
    const otherHiddenInputs = [...form.querySelectorAll('input[type="hidden"]')]
      .filter((input) => input.name !== "site_url");
    const siteUrlInput = document.createElement("input");

    siteUrlInput.type = "hidden";
    siteUrlInput.name = "site_url";
    siteUrlInput.value = siteUrl;
    if (submitButton) submitButton.textContent = "Request a Quote";

    form.replaceChildren(
      siteUrlInput,
      ...otherHiddenInputs,
      document.createRange().createContextualFragment(fieldsMarkup(fieldClass)),
      ...(submitButton ? [submitButton] : []),
    );

    if (!submitButton) {
      const button = document.createElement("button");
      button.type = "submit";
      button.className = fieldClass === "modal-field" ? "modal-submit" : "btn-submit";
      button.textContent = "Request a Quote";
      form.append(button);
    }
  };

  const serviceByPath = {
    "/ghost-writing/": "Ghostwriting",
    "/book-writing/": "Ghostwriting",
    "/book-editing/": "Book Editing",
    "/book-developmental-editing-services/": "Book Editing",
    "/book-line-editing-services/": "Book Editing",
    "/proofreading-services/": "Proofreading",
    "/book-cover-design/": "Cover Design",
    "/book-formatting/": "Interior Formatting",
    "/children-picture-book-illustration/": "Illustration",
    "/children-picture-book-publishing/": "Book Publishing",
    "/book-publishing/": "Book Publishing",
    "/book-publishing-and-ghostwriting-in-houston-tx/": "Book Publishing",
    "/author-website-design/": "Author Website",
    "/book-marketing/": "Book Marketing",
    "/audiobook-services/": "Audiobook Production",
  };

  const selectCurrentService = (form) => {
    const path = window.location.pathname.replace(/\/+$/, "/") || "/";
    const currentService = serviceByPath[path];
    if (!currentService) return;

    const checkbox = [...form.querySelectorAll('input[name="services"]')]
      .find((input) => input.value === currentService);
    if (checkbox) checkbox.checked = true;
  };

  heroes.forEach((hero) => {
    const card = hero.querySelector(".hero-offer-form");
    let form = card?.querySelector("form") || hero.querySelector('form[action="email"]');
    const siteUrl =
      form?.querySelector('[name="site_url"]')?.value ||
      `https://publishersvalley.com${window.location.pathname.replace(/\/$/, "")}`;

    if (!form) {
      const layout = hero.querySelector(".hero-grid, .row.align-items-center, .spread");
      if (!layout) return;

      const contentColumn = [...layout.children].find((child) => child.querySelector("h1"));
      const formColumn =
        [...layout.children].find((child) => child !== contentColumn) ||
        document.createElement("div");

      if (!formColumn.parentElement) layout.append(formColumn);
      formColumn.removeAttribute("aria-hidden");

      const newCard = document.createElement("div");
      newCard.className = "hero-offer-form";
      newCard.innerHTML = '<div class="form-body"><form action="email" method="POST"></form></div>';
      formColumn.append(newCard);
      form = newCard.querySelector("form");
    }

    if (form) {
      updateForm(form, siteUrl);
      selectCurrentService(form);
      form.closest(".hero-offer-form")?.setAttribute("data-service-form-ready", "");
    }
  });
})();
