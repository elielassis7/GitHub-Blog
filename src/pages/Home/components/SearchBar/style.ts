import { styled } from 'styled-components'

export const SearchBarContainer = styled.div`
  max-width: 900px;
  margin-bottom: 32px;
  gap: 8px;
`

export const HeaderSearchBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  background: ${(props) => props.theme['base-input']};
`
