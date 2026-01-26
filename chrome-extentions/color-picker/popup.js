const btn = document.querySelector(".changeColorBtn")

btn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

    chrome.scripting.executeScript({
        target: {
            tabId: tab.id
        },
        func: pickColor,
        args: []
    })


})

async function pickColor() {
    try {
        if (!window.EyeDropper) {
            console.log("Your browser does not support the EyeDropper API");
            return;
        }

        const eyeDropper = new EyeDropper();
        const result = await eyeDropper.open();

        console.log("Selected color:", result.sRGBHex);

        // Copy color to clipboard
        navigator.clipboard.writeText(result.sRGBHex);

    } catch (error) {
        // User canceled the selection - this is expected behavior
        if (error.name === 'AbortError') {
            console.log('Color selection was canceled');
            return;
        }
        // Log other unexpected errors
        console.error(error);
    }
}