const adjectives = ['Augmented', 'Supreme', 'Accelerated', 'Rusty', 'Rectified'];
const nouns = ['Magos', 'Xenarite', 'Tech-Acquisitor', 'Servitor', 'Droid'];
const colors = ['rgba(0, 106, 133, 0.7)',
    'rgba(235, 33, 33, 0.7)',
    'rgba(64, 236, 37, 0.7)',
    'rgba(37, 114, 236, 0.7)'];

export function getRandomName(){
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random()* nouns.length);
    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}

export function getRandomColor() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    return `${colors[colorIndex]}`;
}