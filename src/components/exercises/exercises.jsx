import styles from '../../components/exercises/exercises.module.css'
export const Exercises = () => {
    return (
        <section>
            <div className={styles.cont}>
                <div className={styles.exercises_cards}></div>
                <div className={styles.text_block}>
                    <h2 className={styles.text_variety}></h2>
                    <h3 className={styles.about_text}></h3>
                    <button className={styles.list_exercises_button}></button>
                </div>
            </div>
        </section>
    )
}