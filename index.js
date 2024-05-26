let palyer={
    name:"kaleab",
    chips:"$123 "
}  
let cards=[]; 
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageElement=document.getElementById('message-el')
let cardEl=document.querySelector("#cards-el")
let sumEl= document.getElementById("sum2-el")
let  palyerEl=document.getElementById("player-el");
palyerEl.textContent=palyer.name+" "+palyer.chips;
function getRandomCard(params) {
       
      randnum=Math.floor(Math.random() *13)+1;
      if (randnum=== 1) {
        return 11;
        
      }
      else if (randnum>=11) {
        return 10
        
      }
      else
      return randnum;
 } 
function startGame(params) {
    isAlive=true
  let first=getRandomCard()
  let second=getRandomCard()
  cards=[first,second];
  sum=first+second
    renderGame();
    
 }
 
function renderGame(params) { 
cardEl.textContent="card: "
for (let i = 0; i < cards.length; i++) {
    cardEl.textContent+=cards[i]+" ";
    
}   
sumEl.textContent="sum:"+sum;

    if (sum<=20) {
        message="do you want draw a new card?"
        
    }else if (sum==21) {
        message="wohoo! you've got Blackjack!"
        hasBlackJack=true
    }
    else{
        message="you're out of the game!"
        isAlive=false;
    }
    messageElement.textContent=message;
}
function newCard(params) {
    if (isAlive===true && hasBlackJack===false) {
        let card=getRandomCard();
      sum+=card;
      cards.push(card)
      renderGame();
    }
}