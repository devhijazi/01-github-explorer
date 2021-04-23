import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'


const repositoryProps = {
    name: "Estudos sobre React",
    description:'Criando primeira aplicação com conceitos Basicos',
    link:"www.reactools.hitechline.com.br"
}


export function RepositoryList () {
  return (
    <section className="repository-list">
      <h1>Listagem de Repositórios</h1>
      <ul>
        <RepositoryItem repositoryProps={repositoryProps}/>
        <RepositoryItem repositoryProps={repositoryProps}/>
        <RepositoryItem repositoryProps={repositoryProps}/>
        <RepositoryItem repositoryProps={repositoryProps}/>
      </ul>
    </section>
  )
}