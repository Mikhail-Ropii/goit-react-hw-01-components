import Profile from './Profiles';
import user from './user.json';
import Statistics from './Statistics';
import data from './data.json';

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

      {data.map(statistic => (
<Statistics title="Upload stats" stats={statistic} />
      
      ))};      
      <Statistics stats={statistic} />
      </div>);
};