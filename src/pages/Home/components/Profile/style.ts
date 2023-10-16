import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  height: 212px;
  background: ${(props) => props.theme['base-profile']};

  position: relative;
  top: -100px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;

  p {
    color: ${(props) => props.theme['base-text']};
    font:
      normal 400 16px/25.6px Nunito,
      sans-serif;
    margin-right: 32px;
  }
`

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled.div`
  img {
    width: 148px;
    height: 148px;
    margin: 32px 32px 32px 40px;
    border-radius: 8px;
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 32px 8px 0;

  label {
    font:
      normal bold 24px/31.2px Nunito,
      sans-serif;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme.blue};
    font:
      normal bold 12px/19.2px Nunito,
      sans-serif;
    text-transform: uppercase;
    text-decoration: none;
  }
  img {
    width: 12px;
    height: 12px;
  }
`

export const DetailsProfile = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  gap: 24px;

  img {
    height: 18px;
    width: 18px;
    color: ${(props) => props.theme['base-label']};
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
