import {useState,useEffect} from 'react'

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'


export function RepositoryList () {
  const [repositories, setRepositories] = useState([])

  useEffect(()=>{
    fetch('https://api.github.com/orgs/hitechline/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[])


  return (
    <section className="repository-list">
      <h1>Listagem de Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repositoryProps={repository}/>
        })}
      </ul>
    </section>
  )
}