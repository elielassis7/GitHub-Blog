import { useContext, useEffect } from 'react'
import { HeaderViewPost } from './components/HeaderViewPost/Index'
import { ViewPostContainer, BodyPost } from './style'
import { BlogProvider } from '../../context/BlogContext'
import { useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'

export function PostPage() {
  const { viewPost } = useContext(BlogProvider)
  const pages = useNavigate()

  useEffect(() => {
    if (viewPost.id === 0) {
      pages('/')
    }
  }, [viewPost, pages])

  if (viewPost.id === 0) {
    return null
  }

  return (
    <ViewPostContainer>
      <HeaderViewPost />
      <BodyPost>
        <Markdown>{viewPost.body}</Markdown>
      </BodyPost>
    </ViewPostContainer>
  )
}
