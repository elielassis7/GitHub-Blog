import { ThemeProvider } from 'styled-components'
import { Home } from '../src/pages/Home/Index'
import { PostPage } from '../src/pages/PostPage/Index'
import { NotFound } from '../src/pages/NotFound/Index'
import { Header } from './components/Header/Index'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { GitBlogContextProvider } from './context/BlogContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <GitBlogContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post-page" element={<PostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GitBlogContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
