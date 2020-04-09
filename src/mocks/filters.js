const filterNames = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];

export const generateFilters = () => {
  return filterNames.map((elem) => {
    return {
      name: elem,
      count: Math.floor(Math.random() * 20)
    };
  });
};


