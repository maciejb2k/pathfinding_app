import { action } from "typesafe-actions";
import {
  SWITCH_THEME_REQUEST,
  SWITCH_THEME_SUCCESS,
  SWITCH_THEME_FAILED,
  SWITCH_LANG_REQUEST,
  SWITCH_LANG_SUCCESS,
  SWITCH_LANG_FAILED,
} from "constants/settings";

export const switchTheme = (theme: string) => {
  return action(SWITCH_THEME_REQUEST, theme);
};

export const switchLang = (lang: string) => {
  return action(SWITCH_LANG_REQUEST, lang);
};
