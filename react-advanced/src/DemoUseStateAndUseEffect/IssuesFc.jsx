import { API }  from "./config"
import { useState, useEffect } from "react"

const IssuesFc = () => {

  const [issues, setIssues] = useState([])
  const [demo, setDemo] = useState(false)

  // useEffect équivaut à ComponentDidMout + ComponentDidUpdate
  useEffect(() => {
    console.log("*** useEffect ***")

    // requête ajax (asynchrone)
    fetch(API)
      .then(res => {
        console.log("Github a répondu")
        return res.json()
      })
      .then(issues => {
        setIssues(issues)
      })

    console.log("*** Component updated")

  }, [demo])


  console.log("*** return ***")
  return(
    <>
    { issues.map(({ number, title, state }) => (

      <p key={number}>
        <strong>#{number}</strong>
        <a href={`${API}/${number}`} target="_blank">{title}</a>
        <span onClick={ () => setDemo(!demo) }> {state}</span>
      </p>

    )) }
  </>
  )
}

export default IssuesFc