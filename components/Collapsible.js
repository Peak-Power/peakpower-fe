import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Collapsible({title, content}) {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className={styles.collapsible}>
      <div className={styles.title} onClick={toggle}>{title}</div>
      {open && (
        <div className={`${styles.content} toggle`} >
          {content}
        </div>
      )}
    </div>
  );
}
