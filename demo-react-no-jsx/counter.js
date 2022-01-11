function Button(props) {
  //const cb = () => console.log("click")
  //return e("button", { onClick: cb  }, props.name)
  return e("button", { onClick: props.handleClick  }, props.name)
}

class Counter extends React.Component {
  state = { num: 0 }

  handleIncrement = () => {
    this.setState({ num: this.state.num + 1 })
  }

  handleDecrement = () => {
    this.setState({ num: this.state.num - 1 })
  }

  render() {
    return e("div", null, 
      e(Button, { name: "Increment", handleClick: this.handleIncrement }, null),
      e(Button, { name: "Decrement", handleClick: this.handleDecrement }, null),
      e("p", null, this.state.num)
    )
  }

}