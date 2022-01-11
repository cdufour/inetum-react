import React from "react"
import { API }  from "./config"

class Issues extends React.Component {
  
  constructor(props) {
    super(props)
    console.log("*** constructor ***")

    this.state = { issues: null }
  }

  componentDidMount() {
    console.log("*** componentDidMount ***")

    fetch(API)
      .then(res => {
        console.log("Github a répondu")
        return res.json()
      })
      .then(issues => {
        this.setState({ issues })
      })
  }

  componentDidUpdate() {
    console.log("*** componentDidUpdate ***")
  }

  render() {
    console.log("*** render ***")

    const { issues } = this.state

    if (!issues) return <p>Chargement...</p>

    return (
      <>
        { issues.map(({ number, title, state }) => (

          <p key={number}>
            <strong>#{number}</strong>
            <a href={`${API}/${number}`} target="_blank">{title}</a>
            <span> {state}</span>
          </p>

        )) }
      </>
    )
  }
}

export default Issues