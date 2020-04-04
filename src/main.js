import {createMenuTemplate} from "./component/menu.js";
import {createFiltersTemplate} from "./component/filters.js";
import {createSorterTemplate} from "./component/sorter.js";
import {createCardTemplate} from "./component/film-card.js";
import {createCardFormTemplate} from "./component/film-form.js";
import {createLoadButtonTemplate} from "./component/load-button.js";

const TASK_NUMBER = 3;

const renderElement = (place, template, position) => {
  document.querySelector(place).insertAdjacentHTML(position, template);
};

renderElement(`.main__control`, createMenuTemplate(), `beforeend`);
renderElement(`.main__filter`, createFiltersTemplate(), `beforeend`);
renderElement(`.board__filter-list`, createSorterTemplate(), `beforeend`);
renderElement(`.board__tasks`, createCardFormTemplate(), `beforeend`);
for (let i = 0; i < TASK_NUMBER; i++) {
  renderElement(`.board__tasks`, createCardTemplate(), `beforeend`);
}
renderElement(`.board`, createLoadButtonTemplate(), `beforeend`);
