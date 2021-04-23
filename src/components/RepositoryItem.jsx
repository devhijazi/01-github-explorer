export function RepositoryItem(props){
  return(
    <li>
      <strong>{props.repositoryProps.name}</strong>
      <p>{props.repositoryProps.description ?? 'Sem descrição'}</p>
      <a href={props.repositoryProps.html_url}>Acessar repositório</a>
    </li>
  )
}