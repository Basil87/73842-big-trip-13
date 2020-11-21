import { createSiteInfoTemplate } from "./view/site-info.js";
import { createSiteMenuTemplate } from "./view/site-menu.js";

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};
  
const siteTripMainElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = document.querySelector(`.trip-controls`);

render(siteTripMainElement, createSiteInfoTemplate(), `afterbegin`);
render(siteTripControlsElement, createSiteMenuTemplate(), `afterbegin`);
