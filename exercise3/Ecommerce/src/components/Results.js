import React from 'react';
import styles from './Results.module.css';

export default function Results(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={ styles.promo }>by { props.company }</div>
          <br></br>
          <div className={ styles.promo }>{props.promos[0]}<s>{props.promos[1]}</s></div>
          <div className={ styles.price }>Price: £{ props.price }</div>
          <br></br>
          <div className={ styles.rating }>Rating: { props.rating } / 5 *</div>
        </div>
    </div>
  )
}
