import "./App.css";
import Profile from "./components/Profile/Profile";
import usersdsd from "./database/user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./database/statistical-data.json";
import friends from "./database/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./database/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
