import PropTypes from 'prop-types';
import {
  ProfileSection,
  Description,
  ProfileFoto,
  ProfileName,
  ProfileDescription,
  ProfileList,
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
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
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
