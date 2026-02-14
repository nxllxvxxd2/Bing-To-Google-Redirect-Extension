chrome.webNavigation.onCommitted.addListener((details) => {
    if (details.frameId !== 0) return; // Only main frame

    const url = new URL(details.url);
    if (url.hostname !== "www.bing.com" || url.pathname !== "/search") return;

    const q = url.searchParams.get("q");
    if (!q) return;

 const modifiedQuery = q + " -ai";

    const googleURL = "https://www.google.com/search?q=" + encodeURIComponent(modifiedQuery);

    chrome.tabs.update(details.tabId, { url: googleURL });
});
