import Profile from "./Components/Profile/Profile";
import userData from "./data/userData.json";

function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}

export default App;
