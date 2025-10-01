

//elements
const buttons = document.querySelectorAll('.sound-button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const soundId = e.target.id;
        
        console.log(soundId);
        const sound = new Audio(`sounds/${soundId}.wav`);
        sound.volume = 0.5;
        sound.play();
    });
});
