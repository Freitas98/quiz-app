import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styles from "../styles/Timer.module.css"

interface TimerProps {
    key: any
    duration: number
    timeIsGone: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer 
                size={120}
                isPlaying
                duration={props.duration}
                onComplete={props.timeIsGone}
                colors={['#BC3596', '#F7B801', '#ED827A']}
                colorsTime={[props.duration, props.duration/2, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}