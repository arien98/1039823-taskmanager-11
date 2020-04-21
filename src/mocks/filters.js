const FILTER_NAMES = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];

export const generateFilters = () => {
  return FILTER_NAMES.map((elem) => {
    return {
      name: elem,
      count: Math.floor(Math.random() * 20)
    };
  });
};


