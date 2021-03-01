import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title?  <h2 className={s.title}>{title}</h2>:null}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
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

Statistics.defaultProps = {};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
