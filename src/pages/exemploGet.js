import React from "react"
import api from "../services/api"
import Button from "@material-ui/core/Button"

export default function HomePage({ projects }) {
  const project = projects.project
  return (
    <>
      <p>Teste</p>
      <ul>
        {project.map((proj) => (
          <li key={proj._id}>{proj.description}</li>
        ))}
      </ul>
    </>
  )
}

HomePage.getInitialProps = async () => {
  const response = await api.get("/projects")

  return { projects: response.data }
}
