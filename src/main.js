import {createMenuTemplate} from "./components/menu.js";
import {createFiltersTemplate} from "./components/filters.js";
import {createSorterTemplate} from "./components/sorter.js";
import {createTaskTemplate} from "./components/task-card.js";
import {createTaskFormTemplate} from "./components/task-form.js";
import {createLoadButtonTemplate} from "./components/load-button.js";
import {generateFilters} from "./mocks/filters.js";
import {generateTasks} from "./mocks/task.js";

const TASK_NUMBER = 20;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const tasks = generateTasks(TASK_NUMBER);
const filters = generateFilters();

const renderElement = (place, template, position) => {
  document.querySelector(place).insertAdjacentHTML(position, template);
};

renderElement(`.main__control`, createMenuTemplate(), `beforeend`);
renderElement(`.main__filter`, createFiltersTemplate(filters), `beforeend`);
renderElement(`.board__filter-list`, createSorterTemplate(), `beforeend`);
renderElement(`.board__tasks`, createTaskFormTemplate(tasks[0]), `beforeend`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
tasks.slice(1, showingTasksCount).forEach((task) => renderElement(`.board__tasks`, createTaskTemplate(task), `beforeend`));

renderElement(`.board`, createLoadButtonTemplate(), `beforeend`);

const loadMoreButton = document.querySelector(`.load-more`);

const clickMoreButtonHandler = () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount += SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderElement(`.board__tasks`, createTaskTemplate(task), `beforeend`));

  if (showingTasksCount >= TASK_NUMBER) {
    loadMoreButton.remove();
    loadMoreButton.removeEventListener(`click`, clickMoreButtonHandler);
  }
};

loadMoreButton.addEventListener(`click`, clickMoreButtonHandler);
