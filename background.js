chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({}, (tabs) => {
      for (let tab of tabs) {
        chrome.tabs.reload(tab.id);
      }
    });
  });
  