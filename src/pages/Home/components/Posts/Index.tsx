import { useContext } from 'react'
import { BodyPost, HeaderPost, PostCard, PostsContainer } from './style'
import { BlogProvider } from '../../../../context/BlogContext'
import { formatDistanceToNow, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Posts() {
  const { issues } = useContext(BlogProvider)
  return (
    <PostsContainer>
      {issues.map((issue) => (
        <PostCard key={issue.id}>
          <HeaderPost>
            <h2>{issue.title}</h2>
            <h4>
              {formatDistanceToNow(parseISO(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </h4>
          </HeaderPost>
          <BodyPost>
            <p>{issue.body.slice(0, 150) + '...'}</p>
          </BodyPost>
        </PostCard>
      ))}
    </PostsContainer>
  )
}
