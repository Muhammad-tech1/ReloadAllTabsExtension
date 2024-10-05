chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({currentWindow: true}, (tabs) => {
      for (let tab of tabs) {
        chrome.tabs.reload(tab.id);
      }
    });
  });
  