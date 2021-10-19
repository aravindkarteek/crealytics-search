export const addEuroSymbol = (text) => {
  return `${text} \u20AC`;
};

export const parseImageLinks = (additionalLinks) => {
  return additionalLinks.split(",").map((link) => link.trim());
};

export const pagination = {
  defaultPageSize: 100,
  position: ["topRight", "bottomRight"],
};
