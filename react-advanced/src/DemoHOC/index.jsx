import React from "react"

const simpleHOC = (DecoratedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      console.log("*** classe anonyme wrapper - constructor ***")
    }

    render() {
      return <DecoratedComponent message="simple HOC" />
    }
  }
}

const Hello = props => (<div>Hello {props.message}</div>)

export default simpleHOC(Hello)