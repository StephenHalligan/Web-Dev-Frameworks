import React from 'react';
import styles from './ItemDisplay.module.css';
import Results from './Results';

export default function ItemDisplay(props) {

  return (
    <div>
      <div className={ styles.presentationModeGrid }>
      {
        props.items.map(item => <Results key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
