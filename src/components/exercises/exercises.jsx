import styles from "../../components/exercises/exercises.module.css";
export const Exercises = () => {
  return (
    <section className={styles.exercises_sect}>
      <div className={styles.cont}>
        <div className={styles.exercises_cards}></div>
        <div className={styles.text_block}>
          <h2 className={styles.text_variety}>Variety of exercises</h2>
          <h3 className={styles.about_text}>
            Due to the large variety of exercises, you will be able to clearly
            and effectively organize your training plan using the exercises you
            need.
          </h3>
          <button className={styles.list_exercises_button}>
            List exercises
          </button>
        </div>
      </div>
    </section>
  );
};
