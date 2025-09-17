import { useState, useRef, useEffect, use } from 'react'
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';

const Timer = () => {
    // Ref to store interval ID
    const timerRef = useRef(null);
    // State for timer value
    const [time, setTime] = useState(() => Number(localStorage.getItem('time') || 0));
    // State for running status
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        localStorage.setItem('time', time)
    },[time])

    // Toggle timer start/pause
    const toggleTimer = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        } else {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        setIsRunning(!isRunning);
    };

    // Reset timer
    const resetTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
        timerRef.current = null;
        localStorage.removeItem('time');
    };

    return (
        <div>
            <TimerDisplay time={time} />
            <TimerControls isRunning={isRunning} onToggle={toggleTimer} onReset={resetTimer} />
        </div>
    );
};

export default Timer;