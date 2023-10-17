import { useContext } from 'react'
import { HeaderPostContainer, HeaderPostLinks, DetailsPostView } from './style'
import { BlogProvider } from '../../../../context/BlogContext'
import GitHub from '../../../../assets/github.svg'
import Calendar from '../../../../assets/calendar-day-solid.svg'
import Comment from '../../../../assets/comment-solid.svg'
import ArrowUpBox from '../../../../assets/arrow-up-right-from-square-solid.svg'
import ChevronLeft from '../../../../assets/chevron-left-solid.svg'
import { formatDistanceToNow, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'

export function HeaderViewPost() {
  const { viewPost, resetPostComplete } = useContext(BlogProvider)

  const pages = useNavigate()

  const home = () => {
    resetPostComplete()
    pages('/')
  }
  console.log(viewPost.url)

  return (
    <HeaderPostContainer>
      <HeaderPostLinks>
        <a onClick={home}>
          <img src={ChevronLeft} alt="" />
          Voltar
        </a>
        <a href={viewPost.url}>
          Ver no GitHub
          <img src={ArrowUpBox} alt="" />
        </a>
      </HeaderPostLinks>
      <h2>{viewPost.title}</h2>
      <DetailsPostView>
        <span>
          <img src={GitHub} alt="" />
          {viewPost.owner}
        </span>

        <span>
          <img src={Calendar} alt="" />
          {formatDistanceToNow(parseISO(viewPost.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>

        <span>
          <img src={Comment} alt="" />
          {viewPost.comments}
          {' comentários'}
        </span>
      </DetailsPostView>
    </HeaderPostContainer>
  )
}
