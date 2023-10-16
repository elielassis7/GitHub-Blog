import { useContext } from 'react'
import { HeaderPostContainer, HeaderPostLinks } from './style'
import { BlogProvider } from '../../../../context/BlogContext'
import GitHub from '../../../../assets/github.svg'
import Calendar from '../../../../assets/calendar-day-solid.svg'
import Comment from '../../../../assets/comment-solid.svg'
import ArrowUpBox from '../../../../assets/arrow-up-right-from-square-solid.svg'
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

  return (
    <HeaderPostContainer>
      <HeaderPostLinks>
        <a onClick={home}>Voltar</a>
        <a href={viewPost.url}>
          Ver no GitHub
          <img src={ArrowUpBox} alt="" />
        </a>
      </HeaderPostLinks>
      <h2>{viewPost.title}</h2>
      <div>
        <img src={GitHub} alt="" />
        <span>{viewPost.owner}</span>
        <img src={Calendar} alt="" />
        <span>
          {formatDistanceToNow(parseISO(viewPost.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <img src={Comment} alt="" />
        <span>{viewPost.comments}</span>
      </div>
    </HeaderPostContainer>
  )
}
