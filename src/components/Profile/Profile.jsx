import s from "./Profile.module.css";

const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.profileContainer}>
      <div className={s.profileBox}>
        <div className={s.imageBox}>
          <img className={s.profileImg} src={avatar} alt={username} />
        </div>
        <p className={s.username}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.profileList}>
        <li>
          <span className={s.listItemTitle}>Followers</span>
          <span className={s.listItemValue}>{followers}</span>
        </li>
        <li>
          <span className={s.listItemTitle}>Views</span>
          <span className={s.listItemValue}>{views}</span>
        </li>
        <li>
          <span className={s.listItemTitle}>Likes</span>
          <span className={s.listItemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
