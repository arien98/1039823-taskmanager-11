import {createMenuTemplate} from "./components/menu.js";
import {createFiltersTemplate} from "./components/filters.js";
import {createSorterTemplate} from "./components/sorter.js";
import {createCardTemplate} from "./components/task-card.js";
import {createCardFormTemplate} from "./components/task-form.js";
import {createLoadButtonTemplate} from "./components/load-button.js";

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
