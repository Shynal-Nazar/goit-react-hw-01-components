import PropTypes from 'prop-types';
import { Avatar, FriendName, StatusOnline } from './Friend.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <StatusOnline status={isOnline}></StatusOnline>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
