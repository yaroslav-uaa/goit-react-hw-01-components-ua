import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li id={id}>
            <span>{label}</span>
            <br />
            <span>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
