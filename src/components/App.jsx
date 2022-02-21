import Profile from './profile/Profile';
import user from './profile/userdata';
import Statistics from './statistics/Statistics';
import data from './statistics/data';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'bloc',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
    </div>
  );
};
