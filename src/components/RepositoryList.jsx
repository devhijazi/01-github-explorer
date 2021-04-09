import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList () {
  return (
    <section className="repository-list">
      <h1>Listagem de Repositórios</h1>
      <ul>
        <RepositoryItem title="Repo 1"/>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
      </ul>
    </section>
  )
}