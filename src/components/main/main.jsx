import styles from '../../components/main/main.module.css'
export const Main = () => {
    return(
        <main>
            <div className={styles.cont}>
<h1 className={styles.main_text}>​Sport is the best way <br /> to change yourself for <br /> the better</h1>
<h2 className={styles.second_text}>​With this APP, your workout schedule will be much easier and your workout will be more effective.</h2>
<div className={styles.buttons}>
    <button className={styles.order}>ORDER A PROGRAM</button>
     <button className={styles.view}> VIEW EXERCISES</button>
</div>
</div>
        </main>
    )
}