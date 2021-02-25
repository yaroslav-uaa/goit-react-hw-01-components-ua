import user from "../../database/user.json";
import s from "./Profile.module.css";
import PropTypes from "prop-types";

function Profile() {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={user.avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{user.name}</p>
        <p className={s.tag}>@{user.tag}</p>
        <p className={s.location}>{user.location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;

Profile.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
