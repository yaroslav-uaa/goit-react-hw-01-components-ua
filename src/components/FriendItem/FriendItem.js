const FriendsItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="item" id={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
export default FriendsItem;
