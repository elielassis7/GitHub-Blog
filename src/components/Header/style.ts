import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 296px;
  width: 100%;
  background: ${(props) => props.theme['base-border']};
  display: flex;
  justify-content: space-between;

  img {
    height: 188px;
    width: 288px;
  }
`

export const ImageLogo = styled.div`
  img {
    margin-top: 64px;
    height: 98px;
  }
`
