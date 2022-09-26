import styles from "../styles/Result.module.css"

import { useRouter } from "next/router"
import Statistic from "../components/Statistic";
import Button from "../components/Button";

export default function Result() {
    const router = useRouter();

    const total = +router.query.total;
    const correctAnswers = +router.query.correctAnswers;
    const percentage = Math.round((correctAnswers / total) * 100)

    return (
        <div className={styles.result}>
            <h1 className={styles.title}>Resultado final</h1>
            <div className={styles.statistics}>
                <Statistic text="Perguntas" value={total}/>
                <Statistic text="Certas" value={correctAnswers} backgroundColor="#9CD3A4"/>
                <Statistic text="Percentagem" value={`${percentage}%`} backgroundColor="#DE6A33"/>
            </div>
            <Button href="/" text="Tentar novamente"/>
        </div>
    )
}