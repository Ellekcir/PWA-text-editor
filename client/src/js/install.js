const butInstall = document.getElementById('buttonInstall');
butInstall.classList.add("hidden")

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
    //   event.preventDefault();
    //   butInstall.style.visibility = 'hidden';
});



// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
    // butInstall.setAttribute('disabled', true)
    // butInstall.textContent = 'Installed!';
});
 


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt = null;
    console.log('👍 Successfully installed!', 'appinstalled', event);
});








