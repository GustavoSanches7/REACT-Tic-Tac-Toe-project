export default function GameOver({secretWinner, onRestart}){
    return <div id="game-over">
        <h2>GAME OVER!</h2>
        {secretWinner && <p>YOU DISCOVERED THE SECRET ENDING! :O </p>}
        {!secretWinner && <p> It&apos; a draw!</p>}

        <p> <button onClick={onRestart}>Rematch!</button></p>


    </div>
        
}