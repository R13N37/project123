import React from 'react'

import classes from './ExtendedCard.module.css';

const ExtendedCartView = (props) => {
  return (

  <div className={classes["container"]}>
      <img className={classes["img"]} src={props.img} />
      <div className={classes["title"]}>{props.title}</div>
      <div className={classes["content"]}>{props.content}</div>
      <div className={classes["button"]}>{props.button}</div>
    </div>
  )
}

export default ExtendedCartView;