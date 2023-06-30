console.log('hello world background todo something in extension background~')

//listens for the event and fires a event to execute content.js
chrome.runtime.onMessage.addListener(function (request) {
    if (request.replace) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting
          .executeScript({
            target: { tabId: tabs[0].id },
            files: ['./content.js'],
          })
          .then(() => {
            console.log('Executed script from basic EXTENSION');
          });
      });
    }
  });

  console.log("welcom to extension script from  basic EXTENSION")