const messages = {
    1: "Quand je suis avec toi, les heures passent comme des minutes ! Chaque seconde passé a te parler me rempli de joie ! xx ",
    2: "Tu es le rayon de soleil qui illumine mes journées meme quand elles vont moins bien ! Je ne veux jamais te perdre ! xx",
    3: "Il y a 8 milliard d'etre humain sur terre et tu es celle avec les plus beaux yeux du monde entier ! xx",
    4: "Je me lève, je pense à toi. Je me couche, je pense à toi. Je pense constamment à toi ! xx",
    5: "Tu es la plus belle rencontre que j'ai fait cette année. Je te veux pour toujours ! xx",
    6: "À chaque fois que j'ai une notification, j'espère que c'est la tienne, car c'est toi qui me rend heureux ! xx",
    7: "À chaque fois que je t'écrit, j'ai le sourire. Tu me rends tellement heureux c'est fou ! Tu es incroyable ! xx",
    8: "Tu es tout ce dont je reve. Tu as les plus beaux yeux du monde, et ton sourire me fait craquer à chaque fois ! xx",
    9: "À chaque fois que je reviens de l'école je suis content, car je sais que je vais t'appeler et ca c'est le plus beau moment de ma journée ! xx",
    10: "Je suis fier de la personne dont tu deviens. Tu es ma source d'inspiration, mon idole et la personne dont je souhaite ressembler plus tard ! Je suis si fier de toi ! xx"
};

const days = document.querySelectorAll('.day');
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message');
const closeBtn = document.getElementById('close-btn');

days.forEach(day => {
    day.addEventListener('click', () => {
        const dayNumber = day.getAttribute('data-day');
        messageText.textContent = messages[dayNumber] || "Pas de message pour ce jour !";
        messageBox.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    messageBox.style.display = 'none';
});