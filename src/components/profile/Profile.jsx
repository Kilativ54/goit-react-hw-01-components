import PropTypes from 'prop-types';
import {ContainerProfil, Description, Name, Avatar, TagLocation, Stats, FollowersList, ViewsList. LikesList, Label, Quantity} from 'profil.styled.js'

export const Profile = ({username, tag, location, avatar, stats}) => (<ContainerProfil>
<Description>
  <Avatar
    src={avatar}
    alt="User avatar"
      />
  <Name>{username}</Name>
  <TagLocation >@{tag}</TagLocation>
  <TagLocation >{location}</TagLocation>
</Description>

<Stats>
  <FollowersList>
    <Label>Followers</Label>
<Quantity>{stats.followers}</Quantity>
  </FollowersList>
  <ViewsList>
    <Label>Views</Label>
    <Quantity>{stats.views}</Quantity>
  </ViewsList>
  <LikesList>
    <Label>Likes</Label>
    <Quantity>{stats.likes}</Quantity>
  </LikesList>
</Stats>
</ContainerProfil>)

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,

};