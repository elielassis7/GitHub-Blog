import { styled } from 'styled-components'

export const PostsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  &:hover {
    cursor: pointer;
  }
`

export const PostCard = styled.div`
  width: 100%;
  height: 260px;
  display: grid;
  grid-template-rows: 2, 1fr;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
`

export const HeaderPost = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 32px 0 0 32px;
  h2 {
    width: 283px;
    font-size: 20px;
  }
  h4 {
    font-size: 14px;
  }
`

export const BodyPost = styled.div`
  margin: 32px;
  color: ${(props) => props.theme['base-text']};
  font:
    normal 400 16px/25.6px Nunito,
    sans-serif;
`
