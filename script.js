var audio = document.createElement("audio")
audio.setAttribute("src", "sound.mp3")
audio.loop = true
window.addEventListener('click', () => {
    audio.play().catch(error => {
        console.error("Failed to play audio:", error);
    });
});