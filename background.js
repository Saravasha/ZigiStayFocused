browser.contextMenus.create({
    id: "ban-page",
    title: "I need to focus",
  });
  
  function messageTab(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
      replacement: "BANISHED TO THE NETHER!!!",
    });
  }
  
  function onExecuted(result) {
    let querying = browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    querying.then(messageTab);
  }
  
  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "ban-page") {
      let executing = browser.tabs.executeScript({
        file: "page-banner.js",
      });
      executing.then(onExecuted);
    }
  });