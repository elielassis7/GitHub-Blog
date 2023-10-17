import { styled } from 'styled-components'

export const HeaderPostContainer = styled.main`
  width: 100%;
  height: 170px;
  background: ${(props) => props.theme['base-profile']};
  position: relative;
  top: -100px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  h2 {
    font:
      normal bold 24px/31.2px Nunito,
      sans-serif;
    color: ${(props) => props.theme['base-title']};
    margin: 0 32px 12px;
  }
`

export const HeaderPostLinks = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    font:
      normal bold 12px/19.2px Nunito,
      sans-serif;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    margin: 35.5px 32px;
    gap: 8px;
    cursor: pointer;
  }

  img {
    width: 12px;
    height: 12px;
  }
`
export const DetailsPostView = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 32px;
  margin: 0 32px 32px;

  span {
    display: flex;
    gap: 8px;
  }

  img {
    width: 18px;
    height: 18px;
  }
`
