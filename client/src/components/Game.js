import React, { useState, useEffect } from 'react'
import './Game.css'
import './Timer.js'
import LevelOne from './Levels/LevelOne'
import LevelTwo from './Levels/LevelTwo'
import LevelThree from './Levels/LevelThree'
import LevelFour from './Levels/LevelFour'
import LevelFive from './Levels/LevelFive'
import Leveltemplate from './Levels/Leveltemplate'
import WinnerLoser from './Levels/WinnerLoser'

const Game = () => {

    //states 
    const [level, setLevel] = useState(1);
    const [lives, setLives] = useState(3);
    const [algo, setAlgo] = useState('Merge');
    const [next, setNext] = useState('');

    const handleReset = () => {
        setLives(3);
        setLevel(1);
    }
    if(!level==1 ){
        setNext( '<button onClick = {() => {setLives(lives+1)}}>Previous Step</button> <button onClick = {() => {setLives(lives-1)}}>Next Step</button>')
        }

    return (
        <div className = 'game' >
            <h1 id = 'centered'>Welcome, {window.current_user}. Can you sort this?</h1>

            <div className = "progressBar">
                <p>
                <button onClick = {() => {setLevel(level-1)}}>PREVIOUS LEVEL</button>
                <button onClick = {() => {setLevel(level+1)}}>NEXT LEVEL</button>
                <button onClick = {() => {setLives(lives+1)}}>ADD LIFE</button>
                <button onClick = {() => {setLives(lives-1)}}>SUBTRACT LIFE</button>
                </p>
                
                <div>
                    Lives: {lives} 
                </div>

                <div>
                    Level: {level}
                </div>

                <div>
                    Algorithm: {algo}
                </div>
                
            </div>
            
            {
            lives === 0 && <WinnerLoser lives = {lives} handleReset={() => handleReset()}/>
            }
            
            {(() => {
        		switch (level) {
         			case 1:
            			return <LevelOne/>
         			case 2:
            			return <LevelTwo/>
          			case 3:
            			return <LevelThree/>
                    case 4:
                        return <LevelFour/>
                    case 5:
                        return <LevelFive/>
                    case 6:
                        return <Leveltemplate/>
					default:
            			return <WinnerLoser lives = {lives} handleReset={() => handleReset()}/>
                        
        		}
      		})()}



            <div>
                {next}
                   
            </div>
            



            
        </div>
    )
}

export default Game