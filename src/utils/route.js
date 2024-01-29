import { getUser } from "../global/state/global.state";
import { Login, printTemplateDashboard, PrintPokemonPage, PrintTresEnRayaPage, PrintAhorcadoPage } from "../pages";

export const initControler = (pagesRender) => {

  switch (pagesRender) {
    case undefined:
      JSON.parse(localStorage.getItem(getUser().name))?.name ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "TresEnRaya":
      PrintTresEnRayaPage();
      break;
    case "Ahorcado":
      PrintAhorcadoPage();
      break;
    case "Login":
      Login();
      break;
  }
};