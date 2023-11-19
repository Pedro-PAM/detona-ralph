const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#seconds"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#lives")
    },
    values:{
        timerId: null,
        gameVelocity: 1000,
        countDonwTimer: setInterval(timeCountdown, 1000),
        currentTime:60

    },
    
};

function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);

    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("enemy");
}

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function playSound(){
    let audio = new Audio("./assets/sounds/coin.mp3");
    audio.play();
}

function addListenerHitBox(){
    let lives = 3;
    let score = 0;
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown", ()=>{
            if( square.classList.contains("enemy")){
                score += 1;
                state.view.score.innerText = score;
                playSound();
            }
            else{
                score -=1;
                state.view.score.innerText = score;
                lives -=1;                
                state.view.lives.innerText = lives;                 
                if (lives <=0){
                    alert("Game Over! O seu resultado foi de " + state.view.score.innerText + "!");
                }               
            }        
        })
        
    }

    )
}

function timeCountdown(){    
    state.values.currentTime--;    
    state.view.timeLeft.textContent = state.values.currentTime;
    if (state.values.currentTime <= 0){
        alert("Game Over! O seu resultado foi de " + state.view.score.innerText + "!");
    }
    
}

function initialize(){    
    state.view.lives.innerText = 3;                
    moveEnemy();
    addListenerHitBox();    
}

initialize();

