const whoseMove = (lastPlayer, win) => lastPlayer === 'white' && win ? 'white' : lastPlayer === 'white' && !win
    ? 'black' : lastPlayer === 'black' && win ? 'black' : "white"