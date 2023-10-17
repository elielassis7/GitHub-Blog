import { styled } from 'styled-components'

export const SearchBarContainer = styled.div`
  max-width: 900px;
  margin-bottom: 32px;
  margin-top: -50px;
  gap: 8px;
`

export const HeaderSearchBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -20px 0 20px;

  h2 {
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }
`

export const InputSearch = styled.input`
  width: 100%;
  line-height: 20px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  padding: 12px 16px;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  font:
    normal 400 16px/25.6px Nunito,
    sans-serif;
`
