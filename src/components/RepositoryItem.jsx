export function RepositoryItem(props){
  return(
    <li>
      <strong>{props.repositoryProps.name ?? 'Sem Nome'}</strong>
      <p>{props.repositoryProps.description ?? 'Sem descrição'}</p>
      <a href={props.repositoryProps.link}>Ver Mais</a>
    </li>
  )
}