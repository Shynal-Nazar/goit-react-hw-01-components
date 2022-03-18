import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendsList, Friend } from './Friend.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <Friend key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </Friend>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
