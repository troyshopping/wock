const sentences = [
    "discord.gg/ruinus",
    "Rifle biggest skid in com",
    "Chilli - percaso",
    "discord.gg/massacre",
    "Red mist",
    "130 wpm noob",
    "@Fartsec"
];

const typewriter = document.getElementById('bio');
let sentenceIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentSentence = sentences[sentenceIndex];
    if (isDeleting) {
        typewriter.textContent = currentSentence.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        typewriter.textContent = currentSentence.substring(0, letterIndex + 1);
        letterIndex++;
    }

    const typingSpeed = 100; 
    let typingDelay = isDeleting ? 50 : typingSpeed;

    if (!isDeleting && letterIndex === currentSentence.length) {
        typingDelay = 1500; 
        isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
        typingDelay = 500; 
    }

    setTimeout(type, typingDelay);
}

setTimeout(type, 1000); 