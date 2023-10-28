function startListener(tabId) {
  chrome.tabs.executeScript(tabId, {
    code: `
        // user-select: auto
        document.querySelectorAll("*").forEach((element) => {
            element.style.userSelect = "auto";
        });
      `,
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "start") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      startListener(tabs[0].id);
    });
  }
});
