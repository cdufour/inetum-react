import { useContext } from "react"
import { IssueContext } from "../contexts/Issues"

const FarAway = () => <Child1 />
const Child1 = () => <Child2 />
const Child2 = () => <Child3 />
const Child3 = () => {

  const { issues } = useContext(IssueContext)
  const style = {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#333",
    color: "white",
    padding: 10
  }

  return <div style={style}>Number of issues: {issues.length}</div>
}

export default FarAway