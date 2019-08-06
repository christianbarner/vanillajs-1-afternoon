console.log('test message')

let gameTrack = []


let play = (clickedId) => {
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)
    if(playerSpan.innerText == 'X'){
 playerSpan.innerText = 'O'
 gameTrack[clickedId] = 'X'
 clickedElement.innerText = 'X'
}else if(playerSpan.innerText == 'O'){
    playerSpan.innerText = 'X'
    gameTrack[clickedId] = 'O'
    clickedElement.innerText = 'O'
    }
   
        if(gameTrack[0] !== undefined && gameTrack[0] === gameTrack[1] && gameTrack[0] === gameTrack[2]){
        alert('winner')
    } else if(gameTrack[0] !== undefined && gameTrack[0] === gameTrack[4] && gameTrack[0] === gameTrack[8]){
        alert('winner')
    } else if(gameTrack[3] !== undefined && gameTrack[3] === gameTrack[4] && gameTrack[3] === gameTrack[5]){
        alert('winner')
    } else if(gameTrack[0] !== undefined && gameTrack[0] === gameTrack[3] && gameTrack[0] === gameTrack[6]){
        alert('winner')
    } else if(gameTrack[6] !== undefined && gameTrack[6] === gameTrack[7] && gameTrack[6] === gameTrack[8]){
        alert('winner')
    } else if(gameTrack[6] !== undefined && gameTrack[6] === gameTrack[4] && gameTrack[6] === gameTrack[2]){
        alert('winner')
    } else if(gameTrack[1] !== undefined && gameTrack[1] === gameTrack[4] && gameTrack[1] === gameTrack[7]){
        alert('winner')
    } else if(gameTrack[2] !== undefined && gameTrack[2] === gameTrack[5] && gameTrack[2] === gameTrack[8]){
        alert('winner')
    }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
      if (gameTrack[i] === undefined) {
        boardFull = false;
      }
    }
    if (boardFull === true) {
      alert("cats game");
    }

    
}


