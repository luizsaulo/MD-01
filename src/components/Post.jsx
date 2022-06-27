import React from 'react'
import Avatar from './Avatar';
import Comment from './Comment';
import styles from './Post.module.css';

export default function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src='https://github.com/luizsaulo.png' />
                <div className={styles.authorInfo}>
                    <strong>Luiz Saulo</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title='June 24th 2022 at 15:46h' dateTime='2022-06-24'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            placeholder='Deixe um comentário'
            />

            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
    </article>
  )
}
