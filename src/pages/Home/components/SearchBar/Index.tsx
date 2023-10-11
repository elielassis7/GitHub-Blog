import { useContext } from 'react'
import { HeaderSearchBar, InputSearch, SearchBarContainer } from './style'
import { BlogProvider } from '../../../../context/BlogContext'

export function SearchBar() {
  const { issues } = useContext(BlogProvider)
  const quanty = issues.length

  return (
    <SearchBarContainer>
      <HeaderSearchBar>
        <h2>Publicações</h2>
        <span>{quanty} publicações</span>
      </HeaderSearchBar>
      <InputSearch />
    </SearchBarContainer>
  )
}
