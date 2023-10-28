document.getElementById("change").addEventListener("click", function () {
  chrome.runtime.sendMessage({ action: "start" });
});
