import { useState, useRef } from "react";
import ResultModal from './ResultModal';

// let timer;

export default function TimerChallenge({ title, targetTime }){
    const timer = useRef();
    const dialog = useRef();

    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    function hangleStart(){
        // timer.current = setTimeout(() => {
        //     setTimerExpired(true);
        //     dialog.current.open();
        // }, targetTime * 1000);
        timer.current = setTimeout(() => {
           setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);

        // setTimerStarted(true);
    }

    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
        // clearTimeout(timer.current);
    }
    return (
    <>
    <ResultModal 
        ref={dialog} 
        targetTime={targetTime} 
        remainingTime={timeRemaining}
        onReset={handleReset}
    />
    <section className="challenge">
        <h2>{ title }</h2>
        {/* {timerIsActive && <p>You Lost!</p>} */}
        <p className="chanllenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : hangleStart}>
                {timerIsActive ? 'Stop' : 'Start'} Chanllenge
            </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
    </section>
    </>
    );
}