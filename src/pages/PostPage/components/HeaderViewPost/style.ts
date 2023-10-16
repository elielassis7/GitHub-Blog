import { styled } from 'styled-components'

export const HeaderPostContainer = styled.main`
  width: 100%;
  height: 170px;
  background: blue;
  position: relative;
  top: -100px;

  img {
    width: 18px;
    height: 18px;
  }

  a {
    gap: 8px;
  }
`

export const HeaderPostLinks = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 12px;
    height: 12px;
  }
`
