import { createAction } from "store/actions";
import { SWITCH_LANG, SWITCH_THEME } from "./constants";

export const switchTheme = (theme: string) => {
  return createAction(SWITCH_THEME, theme);
};

export const switchLang = (lang: string) => {
  return createAction(SWITCH_LANG, lang);
};
