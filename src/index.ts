const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const preferredTheme = {
  init() {
    this.get()
    this.watch()
  },
  watch() {
    mediaQuery.addEventListener("change", this.get, false);
  },
  teardown() {
    mediaQuery.removeEventListener("change", this.get, false);
  },
  get() {
    const theme = mediaQuery.matches ? "dark" : "light";
    const event = new CustomEvent("colorSchemeUpdated", {
      detail: { theme },
    });
    window.dispatchEvent(event);
  },
};

module.exports = preferredTheme;
