import { createInfoTemplate } from "./view/info.js";
import { createMenuTemplate } from "./view/menu.js";
import { createFiltersTemplate } from "./view/filters.js";
import { createSortTemplate } from "./view/events.js";
import { createEditFormTemplate } from "./view/edit-form.js";
import { createCreateFormTemplate } from "./view/create-form.js";
import { createPointTemplate } from "./view/point.js";
import { generateTask } from "./mock/mock.js";

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

const info = generateTask();
console.log(info);

const POINTS_COUNT = 3;
  
const siteTripMainElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = document.querySelector(`.trip-controls`);
const siteTripEventsElement = document.querySelector(`.trip-events`);
const siteTripEventsListElement = document.querySelector(`.trip-events__list`);

render(siteTripMainElement, createInfoTemplate(), `afterbegin`);
render(siteTripControlsElement, createMenuTemplate(), `afterbegin`);
render(siteTripControlsElement, createFiltersTemplate(), `beforeend`);
render(siteTripEventsElement, createSortTemplate(), `afterbegin`);
render(siteTripEventsListElement, createEditFormTemplate(), `beforeend`);
render(siteTripEventsListElement, createCreateFormTemplate(), `beforeend`);

for (let i = 0; i < POINTS_COUNT; i++) {
  render(siteTripEventsListElement, createPointTemplate(), `beforeend`);
}