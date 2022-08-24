const grid = document.querySelector('.grid')

const character = [
    'juliadallier',
    'pv1',
    'rafa',
    'jumat',
    'kawan1',
    'orelha',
    'pedroo',
    'ph',
    'carol',
    'amanda',
    'vitoria',
    'curitiba',
    'caiod',
    'lana',
    'lee',
    'liv',
    'mat',
    'saldanha',
    'souza',
    'vanes',
    'vi'
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () =>{
    const disabledCard = document.querySelectorAll('.disable-card');

    if(disabledCard.length === 42){
        window.alert('Rufino parabeniza você por ter ganho o jogo!!');
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter){
        firstCard.firstChild.classList.add('disable-card')
        secondCard.firstChild.classList.add('disable-card')

        firstCard = '';
        secondCard = '';

        checkEndGame();

    }
    else{
        setTimeout(()=> {
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');
        
        firstCard = '';
        secondCard = '';
    },500)

    }
}



const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;
    } 
    
    else if (secondCard === ''){
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode
    }

    checkCards();

}


const createCard = (character) =>{
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

    return card;
}

createCard();

const loadGame = ()=>{

    const duplicateCharacters = [...character, ...character];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() -0.5);

    shuffledArray.forEach((character)=>{
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();