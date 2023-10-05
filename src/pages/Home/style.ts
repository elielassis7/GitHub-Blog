import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 864px;
  margin: auto;
  display: flex;
  flex-direction: column;
`
export const ProfileContainer = styled.div`
  width: 100%;
  height: 212px;
  background: ${(props) => props.theme['base-profile']};

  position: relative;
  top: -100px;

  display: flex;
  flex-direction: row;

  img {
    width: 148px;
    height: 148px;
  }
`

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  label {
    font-size: 700;
  }

  a {
  }
  img {
    width: 12px;
    height: 12px;
  }
`

export const DetailsProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  img {
    height: 18px;
    width: 18px;
  }
`
