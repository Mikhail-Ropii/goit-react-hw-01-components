import Profile from './profiles/Profiles';
import user from '../data/user';
import StatisticsList from './statistics/StatisticsList';
import data from '../data/data';
import FriendList from "./friendList/FriendList"
import friends from "../data/friends";
import TransactionHistory from "./transactions/TransactionHistory";
import transactions from "../data/transactions";


export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={data}
      />
      <FriendList friends={friends}
      />
      <TransactionHistory items={transactions}
      />
      </div>);
};