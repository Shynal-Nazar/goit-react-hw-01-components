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
        <ProfileFoto src={avatar} alt="User avatar" class="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileDescription>{tag}</ProfileDescription>
        <ProfileDescription>{location}</ProfileDescription>
      </Description>

      <ProfileList>
        <ProfileItem>
          <ProfileText class="label">Followers</ProfileText>
          <ProfileText class="quantity">{stats.followers}</ProfileText>
        </ProfileItem>
        <ProfileItem>
          <ProfileText class="label">Views</ProfileText>
          <ProfileText class="quantity">{stats.views}</ProfileText>
        </ProfileItem>
        <ProfileItem>
          <ProfileText class="label">Likes</ProfileText>
          <ProfileText class="quantity">{stats.likes}</ProfileText>
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
