import './A_input.scss'
import React from 'react'

export default class A_input extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleInput = () => {
    const { value } = this.input.current
    const { handleInput } = this.props
    handleInput(value)
  }

  render() {
    const { value, handleSubmit, placeholder } = this.props
    return (
      <input
        className="A_input"
        ref={this.input}
        value={value}
        placeholder={placeholder}
        onInput={this.handleInput}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
    )
  }
}
