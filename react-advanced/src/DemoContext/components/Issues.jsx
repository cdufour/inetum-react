import { useContext } from "react"
import { IssueContext } from "../contexts/Issues"


const Issues = () => {
  const { issues, setIssues } = useContext(IssueContext)

  const handlClick = () => {
    const newIssues = issues.filter(issue => issue.number < 50)
    setIssues(newIssues)
  }

  return (
    <>
      <button onClick={handlClick}>Filtrer issues</button>
      { issues.map(issue => (
        <p key={issue.number}>
          <strong>#{issue.number}</strong>
          <span>{issue.title}</span>
        </p>
      )) }
    </>
  )
}

export default Issues