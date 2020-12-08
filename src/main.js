import SiteInfoView from "./view/site-info.js";
import SiteMenuView from "./view/site-menu.js";
import SiteFiltersView from "./view/filters.js";
import SiteSortView from "./view/site-sort.js";
import EditFormView from "./view/edit-form.js";
import NoPointView from "./view/no-point.js";
import SitePointView from "./view/site-point.js";
import { generateTask } from "./mock/mock.js";
import {render, RenderPosition} from "./utils.js";

const POINTS_COUNT = 15;

const renderTask = (pointListElement, point) => {
  const pointComponent = new SitePointView(point);
  const pointEditComponent = new EditFormView();

  const replacePointToForm = () => {
    pointListElement.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());
  };

  const replaceFormToPoint = () => {
    pointListElement.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  pointComponent.setEditClickHandler(() => {
    replacePointToForm();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  pointEditComponent.setFormSubmitHandler(() => {
    replaceFormToPoint();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(pointListElement, pointComponent.getElement(), RenderPosition.BEFOREEND);
};

const points = new Array(POINTS_COUNT).fill().map(generateTask);
const siteTripMainElement = document.querySelector(`.trip-main`);
const siteTripControlsElement = document.querySelector(`.trip-controls`);
const siteTripEventsElement = document.querySelector(`.trip-events`);
const siteTripEventsListElement = document.querySelector(`.trip-events__list`);
render(siteTripMainElement, new SiteInfoView().getElement(), RenderPosition.AFTERBEGIN);
render(siteTripControlsElement, new SiteMenuView().getElement(), RenderPosition.AFTERBEGIN);
render(siteTripControlsElement, new SiteFiltersView().getElement(), RenderPosition.BEFOREEND);
render(siteTripEventsElement, new SiteSortView().getElement(), RenderPosition.AFTERBEGIN);

for (let i = 0; i < points.length; i++) {
  renderTask(siteTripEventsListElement, points[i]);
}

if (points.length === 0) {
  render(siteTripEventsElement, new NoPointView().getElement(), RenderPosition.BEFOREEND);
} else {
  for (let i = 0; i < points.length; i++) {
    renderTask(siteTripEventsListElement, points[i]);
  }
}
