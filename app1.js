p1={
    score:0,
    button:document.querySelector("#p1button"),
    display:document.querySelector("#p1Display"),
}
p2={
    score:0,
    button:document.querySelector("#p2button"),
    display:document.querySelector("#p2Display"),
}

const resetbutton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector("#playto"); 

let winningScore = 3;
let isGameOver = false;

winningScoreSelect.addEventListener('change',function(e){
    winningScore = parseInt(this.value);
    reset();
})

function updateScore(player,oponent){
    if(!isGameOver){
        player.score+=1;
        if(player.score===winningScore){
            isGameOver=true;
            player.display.classList.add('winner');
            oponent.display.classList.add('loser');
            player.button.disabled = true;
            oponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }  
}
p1.button.addEventListener('click',function(e){
    updateScore(p1,p2);
});

p2.button.addEventListener('click',function(e){
    updateScore(p2,p1);
});

resetbutton.addEventListener('click',reset);

function reset(){
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.display.classList.remove('winner','loser');
    p2.display.classList.remove('winner','loser');
    p1.button.disabled = false;
    p2.button.disabled = false;
}