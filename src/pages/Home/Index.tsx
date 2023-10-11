import { HomeContainer } from './style'
import { Profile } from '../Home/components/Profile/Index'
import { SearchBar } from './components/SearchBar/Index'
import { Posts } from './components/Posts/Index'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchBar />
      <Posts />
    </HomeContainer>
  )
}
