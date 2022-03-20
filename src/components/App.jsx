import Profile from './profile/Profile';
import user from './data/userdata.json';
import Statistics from './statistics/Statistics';
import data from './data/data.json';
import FriendList from './friends/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './transactions/TransactionsHistory';
import transactions from './data/transactions.json';
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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
