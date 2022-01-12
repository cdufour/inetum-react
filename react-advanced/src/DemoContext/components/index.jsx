import IssueProvider from "../contexts/Issues"
import FarAway from "./FarAway"
import Issues from "./Issues"
import Other from "./Other"

const DemoContext = () => {
  return (
    <IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
      <Other />
      <Issues />
      <FarAway />
    </IssueProvider>
  )
}

export default DemoContext