import { createContext, useState, useEffect } from "react";

export const IssueContext = createContext()

const IssueProvider = ({ children, url }) => {
  // state
  const [issues, setIssues] = useState([])

  const fetchIssues = () => {
    fetch(url)
      .then(res => res.json())
      .then(res => setIssues(res))
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  const context = { issues, setIssues, url, fetchIssues }

  return (
    <IssueContext.Provider value={context}>
      {children}
    </IssueContext.Provider>
  ) 
}

export default IssueProvider