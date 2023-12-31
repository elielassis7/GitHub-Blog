import {
  ProfileContainer,
  DetailsProfile,
  InfoProfile,
  ProfileHeader,
  Avatar,
} from './style'

import { memo, useContext } from 'react'
import { BlogProvider } from '../../../../context/BlogContext'
import Git from '../../../../assets/github.svg'
import Build from '../../../../assets/building-solid.svg'
import Group from '../../../../assets/user-group-solid.svg'
import Arrow from '../../../../assets/arrow-up-right-from-square-solid.svg'

function ProfileComponent() {
  const { profile } = useContext(BlogProvider)

  return (
    <ProfileContainer>
      <Avatar>
        <img src={profile.avatar} alt="" />
      </Avatar>

      <InfoProfile>
        <ProfileHeader>
          <label>{profile.name}</label>
          <a href={profile.url}>
            Github
            <img src={Arrow} alt="" />
          </a>
        </ProfileHeader>
        <p>{profile.bio}</p>
        <DetailsProfile>
          <span>
            <img src={Git} alt="" />
            {profile.login}
          </span>
          <span>
            <img src={Build} alt="" />
            {profile.company == null ? ' - ' : profile.company}
          </span>
          <span>
            <img src={Group} alt="" />
            {profile.follower} {' seguidor(es)'}
          </span>
        </DetailsProfile>
      </InfoProfile>
    </ProfileContainer>
  )
}

export const Profile = memo(ProfileComponent)
