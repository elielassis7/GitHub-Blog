import { useContext } from 'react'
import { HeaderSearchBar, InputSearch, SearchBarContainer } from './style'
import { BlogProvider } from '../../../../context/BlogContext'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

export function SearchBar() {
  const { issues, filterPost } = useContext(BlogProvider)
  const quanty = issues.length

  const querySchema = z.object({
    query: z.string(),
  })

  type SearchFormInput = z.infer<typeof querySchema>

  const { register, handleSubmit } = useForm<SearchFormInput>()

  function handleSearch(data: SearchFormInput) {
    filterPost(data.query)
  }
  return (
    <SearchBarContainer>
      <HeaderSearchBar>
        <h2>Publicações</h2>
        <span>{quanty} publicações</span>
      </HeaderSearchBar>

      <form onSubmit={handleSubmit(handleSearch)}>
        <InputSearch
          type="text"
          placeholder="Buscar conteudo"
          {...register('query')}
        />
      </form>
    </SearchBarContainer>
  )
}
