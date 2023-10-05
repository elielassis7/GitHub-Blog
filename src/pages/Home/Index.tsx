import {
  DetailsProfile,
  HomeContainer,
  InfoProfile,
  ProfileContainer,
  ProfileHeader,
} from './style'
import Git from '../../assets/github.svg'
import Build from '../../assets/building-solid.svg'
import Group from '../../assets/user-group-solid.svg'
import Foto from '../../assets/20230828_201448.jpg'
import Arrow from '../../assets/arrow-up-right-from-square-solid.svg'

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={Foto} alt="" />
        <InfoProfile>
          <ProfileHeader>
            <label>Nome Titular</label>
            <a href="#">
              GitHub
              <img src={Arrow} alt="" />
            </a>
          </ProfileHeader>
          <p>
            Bio: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus excepturi provident nam cum ipsa hic enim dolorem qui nemo,
            explicabo corrupti, alias praesentium harum illo optio laudantium!
            Error, repellat porro.
          </p>
          <DetailsProfile>
            <span>
              <img src={Git} alt="" />
              nomeUsuario
            </span>
            <span>
              <img src={Build} alt="" />
              empresa
            </span>
            <span>
              <img src={Group} alt="" />
              seguidores
            </span>
          </DetailsProfile>
        </InfoProfile>
      </ProfileContainer>
    </HomeContainer>
  )
}
