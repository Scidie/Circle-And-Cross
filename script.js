let handlers = {
    fieldsArray: [0,0,0,
                  0,0,0,
                  0,0,0],

    addSymbolToArray: function(index, symbol) {
        this.fieldsArray[index] = symbol;
    },

    createCircleSymbol: function() {
        const circleImage = document.createElement('img');
        circleImage.src = 'images/circle.png';
        circleImage.classList.add('circle-image');
        return circleImage;
    },

    createCrossSymbol: function() {
        const crossImage = document.createElement('img');
        crossImage.src = 'images/cross.png';
        crossImage.classList.add('cross-image');
        return crossImage;
    },

    checkWhoWin: function(symbol) {
        if (true) {
            this.createWinnersBoard(symbol);
        }   
    },

    createWinnersBoard: function(winner) {
        let winnersBoardContainer = document.getElementById('winners-board-container');
        let winnerText = document.getElementById('winner-text');
        winnersBoardContainer.style.opacity = '1';
        winnerText.innerHTML =  `${winner} wins!`;
    }
}

let lastSymbolUsed = 'cross';
console.log(lastSymbolUsed);

let fields = Array.from(document.querySelectorAll('.field'))
fields.forEach(field => field.addEventListener('click', function(event) {
    if (field.firstChild === null) {
        if (lastSymbolUsed === 'cross') {
            field.appendChild(handlers.createCircleSymbol());
            let index = fields.indexOf(field);
            handlers.addSymbolToArray(index, 'circle');
            lastSymbolUsed = 'circle';
            handlers.checkWhoWin(lastSymbolUsed);
        } else {
            field.appendChild(handlers.createCrossSymbol());
            let index = fields.indexOf(field);
            handlers.addSymbolToArray(index, 'cross');
            lastSymbolUsed = 'cross';
        }
    }
}));
