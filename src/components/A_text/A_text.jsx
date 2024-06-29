import './A_text.scss'
import React from 'react'
import classNames from 'classnames'

export default class A_text extends React.Component {
  render() {
    const { text, type } = this.props

    const classes = classNames({
      A_text: true,
      [`${type}`]: true
    })

    return <div className={classes}>{text}</div>
  }
}
