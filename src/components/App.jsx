import Profile from './profile/Profile';
import user from './profile/userdata';
import Statistics from './statistics/Statistics';
import data from './statistics/data';
import FriendList from './friends/FriendList';
import friends from './friends/friends';
import TransactionHistory from './transactions/TransactionsHistory';
import transactions from './transactions/transactions';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
