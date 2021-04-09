export function RepositoryItem(props){
  return(
    <li>
      <strong>{props.title ?? 'Sem Nome'}</strong>
      <p>{props.description ?? 'Sem descrição'}</p>
      <a href="#">Ver Mais</a>
    </li>
  )
}