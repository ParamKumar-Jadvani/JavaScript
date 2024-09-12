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

const checkIsLogin = (token) => {
  const isLogin = localStorage.getItem(token);
  if (isLogin) return true;
  return false;
};

const logout = (id) => {
  localStorage.removeItem("isLogin");
  window.location.href = "/API/Json_Project/index.html";
};

export {
  createElement,
  getElement,
  getValue,
  getElementQuerySelector,
  checkIsLogin,
  logout,
};
