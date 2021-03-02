import PropTypes from 'prop-types';
import f from '../FriendList/FriendList.module.css';


const FriendsItem = ({ avatar, name, isOnline}) => {
  return (
    <li className={f.item}>
      <span className={isOnline ? f.online :f.offline}></span>
      <img className={f.avatar} src={avatar} alt="" width="48" />
      <p className={f.name}>{name}</p>
    </li>
  );
};
export default FriendsItem;

FriendsItem.defaultProps = {
  name: "БУСЯ",
};

FriendsItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
};
