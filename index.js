const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const watch = () => {
  mediaQuery.addEventListener("change", get, false);
  get()
}

const teardown = () => {
  mediaQuery.removeEventListener("change", get, false);
}

export const get = () => {
  const theme = ["dark", "light", "no-preference"].find(
    (scheme) => window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches
  );

  const event = new CustomEvent("colorSchemeUpdated", {
    detail: {
      theme,
    },
  });
  window.dispatchEvent(event);
}

export default {
  watch,
  teardown,
  get
};