const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

module.exports = {
  watch() {
    this.get()
    mediaQuery.addEventListener("change", this.get, false);
  },
  teardown() {
    mediaQuery.removeEventListener("change", this.get, false);
  },
  get() {
    const theme = mediaQuery.matches ? "dark" : "light";
    const event = new CustomEvent("colorSchemeUpdated", {
      detail: {
        theme,
      },
    });
    window.dispatchEvent(event);
  },
};
