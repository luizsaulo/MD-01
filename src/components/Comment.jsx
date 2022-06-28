import { Trash, ThumbsUp } from 'phosphor-react';
import React from 'react'
import Avatar from './Avatar';
import styles from './Comment.module.css';

export default function Comment({ content }) {
  return (
    
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/luizsaulo.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Saulo</strong>
            <time title='June 27th 2022 at 11:01h' dateTime='2022-06-27'>Publicado há cerca de 1h</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
      
      
    </div>
  )
}
