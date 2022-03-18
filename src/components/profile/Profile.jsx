import PropTypes from 'prop-types';
import {
  ProfileSection,
  Description,
  ProfileFoto,
  ProfileName,
  ProfileDescription,
  ProfileList,
  ProfileItem,
  ProfileText,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileSection>
      <Description>
        <ProfileFoto src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileDescription>{tag}</ProfileDescription>
        <ProfileDescription>{location}</ProfileDescription>
      </Description>

      <ProfileList>
        <ProfileItem>
          <ProfileText>Followers</ProfileText>
          <ProfileText>{stats.followers}</ProfileText>
        </ProfileItem>
        <ProfileItem>
          <ProfileText>Views</ProfileText>
          <ProfileText>{stats.views}</ProfileText>
        </ProfileItem>
        <ProfileItem>
          <ProfileText>Likes</ProfileText>
          <ProfileText>{stats.likes}</ProfileText>
        </ProfileItem>
      </ProfileList>
    </ProfileSection>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
