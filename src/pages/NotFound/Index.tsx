import { useNavigate } from 'react-router-dom'
import { NotFoundContainer } from './style'

export function NotFound() {
  const pages = useNavigate()

  return (
    <NotFoundContainer>
      <h1>Pagina não encontrada</h1>
      <a
        onClick={() => {
          pages('/')
        }}
      >
        Voltar
      </a>
    </NotFoundContainer>
  )
}
