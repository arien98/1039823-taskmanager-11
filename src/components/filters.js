const createFilterMarkup = (name, count, isChecked) => {
  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${count === 0 ? `disabled` : ``}
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${count}</span>
    </label>`
  );
};

export const createFiltersTemplate = (filters) => {
  const filterMarkup = filters
    .map((element, i) => createFilterMarkup(element.name, element.count, i === 0))
    .join(`\n`);

  return (
    `<section class="main__filter filter container">
      ${filterMarkup}
    </section>`);
};
