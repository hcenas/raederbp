var toggle = true;

function send_toggle() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: "toggle" });
  });
}

window.addEventListener("load", function () {
  try {
    send_toggle();
  } catch {}
});
