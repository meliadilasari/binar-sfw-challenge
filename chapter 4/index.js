// Berisi Player dari GAME
class Game {
    // Player 1 & 2  { choosen :  }
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.winner 
        this.isCanPlay = false
    }

    getRandomValue() {
        const num = Math.floor(Math.random() * 3);
        let choosen = ''
        if(num === 0) {
            choosen = 'scissor'
            cardScissorCom.changeBackgroundColor()
        }else if(num === 1) {
            choosen = 'rock'
            cardRockCom.changeBackgroundColor()
        }else if(num === 2) {
            choosen = 'paper'
            cardPaperCom.changeBackgroundColor()
        }
        this.player2.choosen = choosen
        this.checkResult()
        console.log(this.player1, "<<< INI PLAYER 1")
        console.log(this.player2, "<< INI PLAYER 2")
    }


    checkResult() {
        let choosenP1 = this.player1.choosen
        let choosenP2 = this.player2.choosen
        console.log('==== check =====')
        
        console.log(resultDiv)
       
        if(choosenP1 === 'paper' && choosenP2 === 'rock') {
           
            
            resultDiv.innerHTML = 
            `
             <h1> Player 1 WIN </h1>
            `
        } else if (choosenP1 === 'paper' && choosenP2 === 'paper'){
            resultDiv.innerHTML = 
            `
             <h1> It's a tie </h1>
            `
        } else if (choosenP1 === 'paper' && choosenP2 === 'scissor'){
            resultDiv.innerHTML = 
            `
             <h1> Computer win</h1>
            `
        } else if(choosenP1 === 'rock' && choosenP2 === 'rock') {
           
            
            resultDiv.innerHTML = 
            `
             <h1> It's a tie </h1>
            `
        } else if (choosenP1 === 'rock' && choosenP2 === 'paper'){
            resultDiv.innerHTML = 
            `
             <h1>  Computer win </h1>
            `
        } else if (choosenP1 === 'rock' && choosenP2 === 'scissor'){
            resultDiv.innerHTML = 
            `
             <h1> Player 1 win </h1>
            `
        }  else if(choosenP1 === 'scissor' && choosenP2 === 'rock') {
           
            
            resultDiv.innerHTML = 
            `
             <h1>  Computer win </h1>
            `
        } else if (choosenP1 === 'scissor' && choosenP2 === 'paper'){
            resultDiv.innerHTML = 
            `
             <h1>  Player 1 win </h1>
            `
        } else if (choosenP1 === 'scissor' && choosenP2 === 'scissor'){
            resultDiv.innerHTML = 
            `
             <h1> It's a tie </h1>
            `
        } 

    }




} 

class Card {
    constructor (type, isChoosen, element, isClick) {
        this.type = type
        this.isChoosen = isChoosen
        this.element = element
        this.isClick = isClick
        if(this.isClick) {
            this.element.addEventListener('click', () => {
                this.changeBackgroundColor()
                game.player1.choosen = this.type
                game.getRandomValue()
            })
        }


    }

    changeBackgroundColor() {
        let color = ''
        console.log(this.isClick)
        if(this.isClick) {
            color = 'grey'
        }else {
            color = 'grey'
        }
        this.element.style.backgroundColor = color
    }

    removeEventListener() {
        console.log(' card di hapus ')
        this.element.removeEventListener('click' , () => {
            console.log('delete event')
        })
    }

    

} 





// Ini untuk GAME FLOW

const inputName = document.getElementById('inputName')
const submitButton = document.getElementById('submitButton')
const scissorP1 = document.getElementById('scissor-p1')
const rockP1 = document.getElementById('rock-p1')
const paperP1 = document.getElementById('paper-p1')
const scissorCom = document.getElementById('scissor-com')
const rockCom = document.getElementById('rock-com')
const paperCom= document.getElementById('paper-com')
const resultDiv = document.querySelector('.result')
const refreshButton = document.getElementById('refreshButton')

const p1 = {
    name : 'Player 1',
    choosen : ''
}
const p2 = {
    name : 'Player 2',
    choosen : ''
}
const game = new Game(p1, p2)

let cardRockP1
let cardPaperP1
let cardScissorCom
let cardRockCom
let cardPaperCom




        cardscissorP1 = new Card('scissor', false, scissorP1, true)
        cardRockP1 = new Card('rock', false, rockP1, true)
        cardPaperP1 = new Card('paper', false, paperP1, true)
        cardscissorCom = new Card('scissor', false, scissorCom)
        cardRockCom = new Card('rock', false, rockCom)
        cardPaperCom = new Card('paper', false, paperCom)
    
    
    // if(game.isCanPlay) {
    //     game.isCanPlay = false
    // }else {
    //     game.isCanPlay = true
    // }
    document.getElementById('refreshButton').addEventListener('click', function(){

        location.reload();
        return false;

    });



// tombol replay  => reset pilihan

