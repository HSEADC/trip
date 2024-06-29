import './A_button.scss'
import React from 'react'
import classNames from 'classnames'

export default class A_button extends React.Component {
  render() {
    const { text, handleClick, disabled, type } = this.props

    const classes = classNames ({
      A_button: true,
      disabled: disabled,
      [`${type}`]: true
    })

    return (
      <div className={classes} type="primary" onClick={handleClick}>
        {text}
      </div>
    )
  }
}
