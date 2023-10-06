import { ThemeProvider } from 'styled-components'
import { Home } from '../src/pages/Home/Index'
import { Header } from './components/Header/Index'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { GitBlogContextProvider } from './context/BlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <GitBlogContextProvider>
        <Home />
      </GitBlogContextProvider>
    </ThemeProvider>
  )
}
