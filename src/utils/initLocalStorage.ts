export const initLocalStorageSettings = () => {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "pl");
  }
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }
};
