const $ = (selector, byId = true) => byId ? document.getElementById(selector) : document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const value = (selector, byId = true) => $(selector, byId)?.value;
const radioValue = (name) => value('input[name="' + name + '"]:checked', false);
const checkValue = (name) => Array.from($$('input[name="' + name + '"]:checked')).map(c => c.value);
const checked = (selector, byId = true) => $(selector, byId)?.checked;
const disable = (selector, byId = true) => $(selector, byId).disabled = true;
const enable = (selector, byId = true) => $(selector, byId).disabled = false;
const addClass = (selector, byId = true, ...className) => $(selector, byId).classList.add(...className);
const removeClass = (selector, byId = true, ...className) => $(selector, byId).classList.remove(...className);
const hide = (selector, byId = true) => addClass(selector, byId, 'hidden');
const show = (selector, byId = true) => removeClass(selector, byId, 'hidden');
const content = (selector, content = '', html = false, byId = true) => {
  const el = $(selector, byId);
  if (el)  html ? el.innerHTML = content : el.textContent = content;
}
const fetchJson = (data, url = null) =>
  fetch(url || window.location.href, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(res => res.json());
