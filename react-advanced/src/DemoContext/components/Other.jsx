import { useContext } from "react"
import { IssueContext } from "../contexts/Issues"

const Other = () => {
  const { fetchIssues } = useContext(IssueContext)

  return <button onClick={fetchIssues}>Fetch Issues</button>
}

export default Other