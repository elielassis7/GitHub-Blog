import {
  ProfileContainer,
  DetailsProfile,
  InfoProfile,
  ProfileHeader,
} from './style'

import { useContext } from 'react'
import { BlogProvider } from '../../../../context/BlogContext'
import Git from '../../../../assets/github.svg'
import Build from '../../../../assets/building-solid.svg'
import Group from '../../../../assets/user-group-solid.svg'
import Arrow from '../../../../assets/arrow-up-right-from-square-solid.svg'

export function Profile() {
  const { profile } = useContext(BlogProvider)

  return (
    <ProfileContainer>
      <img src={profile.avatar} alt="" />
      <InfoProfile>
        <ProfileHeader>
          <label>{profile.name}</label>
          <a href={profile.url}>
            GitHub
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
            {profile.follower}
          </span>
        </DetailsProfile>
      </InfoProfile>
    </ProfileContainer>
  )
}
