const btn = document.querySelector('#btn');
const bounce = document.querySelector("#btn-toggle");
const body = document.body;
const cards = document.getElementsByClassName('container__main-item');
const cardsText = document.getElementsByClassName('container__main-item-followers--big');
const cardsStats = document.getElementsByClassName('container__main-stats');
const cardsStatsText = document.getElementsByClassName('container__main-stats-item-views');
const h2 = document.getElementById('h2-text')



btn.addEventListener('click', function(){
    bounce.classList.toggle("button-animation")
    body.classList.toggle('whiteBody')
    h2.classList.toggle('whiteText')
    this.classList.toggle('whiteButton')
    

    for(let i = 0; i < cards.length; i++){
        cards[i].classList.toggle('whiteCard')
    }

    for(let i =0; i< cardsText.length; i++){
        cardsText[i].classList.toggle('whiteText')
    }

    for(let i =0; i< cardsStats.length; i++){
        cardsStats[i].classList.toggle('whiteCard')
    }

    for(let i = 0; i< cardsStats.length; i++){
        cardsStatsText[i].classList.toggle('whiteText')
    }
})