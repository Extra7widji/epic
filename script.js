const playButtons = document.querySelectorAll('.play-btn');
const audioPlayer = document.getElementById('audio-player');
const nowPlaying = document.getElementById('now-playing');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.audiobook');
        const title = parent.getAttribute('data-title');
        const file = parent.getAttribute('data-file');

        audioPlayer.src = file;
        audioPlayer.play();
        nowPlaying.textContent = `Tocando agora: ${title}`;
    });
});
