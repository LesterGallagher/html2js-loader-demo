import createArticle from './templates/article.html';

const rnd = (...arr) => arr[Math.floor(Math.random() * arr.length)];

const rndTitle = () => rnd('A title', 'Another title', 'A different title');

const articles = document.getElementById('articles');

for(let i = 0; i < 10; i++) {
    const art = articles.appendChild(createArticle());
    art.querySelector('.title').innerText = rndTitle();
}
