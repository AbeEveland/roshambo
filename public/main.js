// ??????????

// ??????????
// selected will be working with properties picId,pLayer, play.
function selected(picId, player, play) {
  // so that a newgame will show both players buttons.
  if (picId === 'newGame') {
    // player1 rock button
    const rockButtonPlayer1 = document.getElementById('rockButtonPlayer1')
    rockButtonPlayer1.style.visibility = 'visible'
    // player1 paper button
    const paperButtonPlayer1 = document.getElementById('paperButtonPlayer1')
    paperButtonPlayer1.style.visibility = 'visible'
    // player1 scissors button
    const scissorButtonPlayer1 = document.getElementById('scissorButtonPlayer1')
    scissorButtonPlayer1.style.visibility = 'visible'
    // player2 rock button
    const rockButtonPlayer2 = document.getElementById('rockButtonPlayer2')
    rockButtonPlayer2.style.visibility = 'visible'
    // player2 paper button
    const paperButtonPlayer2 = document.getElementById('paperButtonPlayer2')
    paperButtonPlayer2.style.visibility = 'visible'
    // player scissors button
    const scissorButtonPlayer2 = document.getElementById('scissorButtonPlayer2')
    scissorButtonPlayer2.style.visibility = 'visible'

    // makes newGame button disappear after it is clicked
    const newGameButton = document.getElementById('newGameButton')
    newGameButton.style.visibility = 'hidden'

    // ??????????
    player1 = 'noPick'
    player2 = 'noPick'
    // displays image of player 1 turn choices
    const imageOfPlayer1Choices = document.getElementById(player)
    imageOfPlayer1Choices.src = 'rock_paper_scissors.jpg'
    // displays image of player 1 turn choices
    const imageOfPlayer2Choices = document.getElementById(play)
    imageOfPlayer2Choices.src = 'rock_paper_scissors.jpg'
    // ???????
    newGame = 1
    // ????????
    return
  }
  // deciding which players info we are dealing with
  if (player === 1) player1 = play
  if (player === 2) player2 = play

  // matching correct image source with play value
  const playersChoice = document.getElementById(picId)

  if (play === 'rock') playersChoice.src = 'rock.jpg'
  if (play === 'paper') playersChoice.src = 'paper.jpg'
  if (play === 'scissors') playersChoice.src = 'scissors.jpg'
  if (play === 'lizard') playersChoice.src = 'images.jpg'
  if (play === 'Spock') playersChoice.src = 'download.jpg'

  if (player1 === 'noPick' || player2 === 'noPick') return

  PicId = ''

  // matching image with outcome
  if (player1 === player2) PicId = 'tie'

  if (player1 === 'rock' && player2 === 'scissors') PicId = 'pic1'
  if (player1 === 'paper' && player2 === 'rock') PicId = 'pic1'
  if (player1 === 'scissors' && player2 === 'paper') PicId = 'pic1'
  if (player1 === 'rock' && player2 === 'lizard') PicId = 'pic1'
  if (player1 === 'lizard' && player2 === 'Spock') PicId = 'pic1'
  if (player1 === 'Spock' && player2 === 'scissors') PicId = 'pic1'
  if (player1 === 'scissors' && player2 === 'lizard') PicId = 'pic1'
  if (player1 === 'lizard' && player2 === 'paper') PicId = 'pic1'
  if (player1 === 'paper' && player2 === 'Spock') PicId = 'pic1'
  if (player1 === 'Spock' && player2 === 'rock') PicId = 'pic1'

  if (PicId === '') PicId = 'pic2'

  if (PicId === 'tie') {
    const tieGamePlayer1 = document.getElementById('pic1')
    tieGamePlayer1.src = 'tie.jpg'
    const tieGamePlayer2 = document.getElementById('pic2')
    tieGamePlayer2.src = 'tie.jpg'
    newGame = 0
  }

  if (PicId !== 'tie') {
    const winner = document.getElementById(PicId)
    winner.src = 'winner.jpg'
    newGame = 0
  }

  // hide players choice buttons at the end of game
  if (newGame === 0) {
    const rockButtonPlayer1 = document.getElementById('rockButtonPlayer1')
    rockButtonPlayer1.style.visibility = 'hidden'
    const paperButtonPlayer1 = document.getElementById('paperButtonPlayer1')
    paperButtonPlayer1.style.visibility = 'hidden'
    const scissorButtonPlayer1 = document.getElementById('scissorButtonPlayer1')
    scissorButtonPlayer1.style.visibility = 'hidden'
    const rockButtonPlayer2 = document.getElementById('rockButtonPlayer2')
    rockButtonPlayer2.style.visibility = 'hidden'
    const paperButtonPlayer2 = document.getElementById('paperButtonPlayer2')
    paperButtonPlayer2.style.visibility = 'hidden'
    const scissorButtonPlayer2 = document.getElementById('scissorButtonPlayer2')
    scissorButtonPlayer2.style.visibility = 'hidden'
    const newGameButton = document.getElementById('newGameButton')
    newGameButton.style.visibility = 'visible'
  }
  return
}
