export function RepositoryItem(props){
  return(
    <li>
      <strong>{props.title ?? 'Sem Nome'}</strong>
      <p>Descrição do repo 1</p>
      <a href="#">Ver Mais</a>
    </li>
  )
}