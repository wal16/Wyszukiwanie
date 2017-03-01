import React from 'react'

export const Button = props => (
  <button>
    {props.label} {props.label2} {props.label2}
  </button>
)

export const Container = props => (
  <div>{props.children}</div>
)

export const Link = props => (
  <a href={props.href}>
    <span style={{color: 'red'}}>
      {props.children}
    </span>
  </a>
)

export default {
  Button: Button,
  Container: Container,
  Link: Link
}