import React from 'react'
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40' 
        />
    
    <div className={styles.profile}>
        <strong>Luiz Saulo</strong>
        <span>Web Developer</span>
    </div>
    <footer>
        <a href='#'>
            Editar seu perfil
        </a>
    </footer>
    </aside>
  )
}
