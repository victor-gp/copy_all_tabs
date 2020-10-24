function loadSettings() {
  browser.storage.local.get().then((res) => {
    (document.querySelector("#show-badge").checked = res.showBadge),
      (document.querySelector("#show-badge").checked = res.showBadge),
      (document.querySelector("#separator").value = res.separator);
  });
}

function updateSettings(e) {
  browser.storage.local.set({
  browser.storage.sync.set({
    showBadge: document.querySelector("#show-badge").checked,
    separator: document.querySelector("#separator").value,
  });

  // TODO:
  // not sure how to call this (from background.js) to update instantly
  // updateCount();
  // in the meantime, any change to tabs should trigger the update

  e.preventDefault();
}

document.addEventListener("DOMContentLoaded", loadSettings);
document.querySelector("form").addEventListener("submit", updateSettings);