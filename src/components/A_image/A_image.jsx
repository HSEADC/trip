import './A_image.scss'
import React from 'react'
import classNames from 'classnames'

export default class A_image extends React.Component {
  render() {
    const { src, type } = this.props

    const classes = classNames({
      A_image: true,
      [`${type}`]: true
    })

    return <img className={classes} src={src} />
  }
}
