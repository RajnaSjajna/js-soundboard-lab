
const buttons = document.querySelectorAll('.sound-button');
buttons.forEach(button => {
    button.addEventListener('click', (evt) => {
        const soundId = evt.target.id;
        console.log(soundId);
        const sound = new Audio(`sounds/${soundId}.wav`);
        sound.volume = 0.5;
        sound.play();
    });
});