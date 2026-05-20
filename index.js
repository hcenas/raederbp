function send_toggle() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (!tabs[0]) return;

    chrome.tabs.sendMessage(
      tabs[0].id,
      { greeting: "toggle" },
      () => {
        if (chrome.runtime.lastError) {
          console.log("Content script not available:", chrome.runtime.lastError.message);
        }
      }
    );
  });
}

window.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggle");

  if (!btn) return;

  btn.addEventListener("click", send_toggle);
});
