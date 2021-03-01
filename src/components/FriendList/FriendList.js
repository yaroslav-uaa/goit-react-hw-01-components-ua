import FriendItem from "../FriendItem/FriendItem";
import f from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={f.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
      ))}
    </ul>
  );
};
export default FriendList;
