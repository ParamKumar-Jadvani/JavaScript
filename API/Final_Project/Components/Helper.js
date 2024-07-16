const createElement = (tag, innerHTML = "", attributes = {}) => {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
};

const getValue = (id) => {
  return document.getElementById(id).value;
};

const getElement = (id) => {
  return document.getElementById(id);
};

const getElementQuerySelector = (id) => {
  return document.querySelector(id);
};

export { createElement, getElement, getValue, getElementQuerySelector };
