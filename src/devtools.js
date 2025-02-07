const initSidebarPanel = (sidebarPane) => {
    sidebarPane.setPage('devtools.html');

    sidebarPane.onShown.addListener((window) => {
        console.log('onShown', window);
    });

    sidebarPane.onHidden.addListener((window) => {
        console.log('onHidden', window);
    });
};

// Only call this method when the script is running from the hidden devtools page registered from the manifest.json.
if (window.location.pathname === "/devtools-page.html") {
    chrome.devtools.panels.elements.createSidebarPane('POC', initSidebarPanel);
} else {
    // When running this script in the devtools sidebar page, set activePage to the current window
    // (in the hidden devtools page that is going to be done by the initSidebarPanel callback).
    activePane = window;
}