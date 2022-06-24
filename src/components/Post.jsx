import React from 'react'
import styles from './Post.module.css';

export default function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src='https://github.com/luizsaulo.png' />
                <div className={styles.authorInfo}>
                    <strong>Luiz Saulo</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title='June 24th 2022 at 15:46h' dateTime='2022-06-24'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Whasupp y´all</p>
            <p>Today I´m taking one more step further on my programming journey. It´s a new front end course</p>
            <p><a href=''>https://github.com/luizsaulo</a></p>
            <p><a href=''>#rocketseat</a> <a href=''>#ignite</a></p>
        </div>
    </article>
  )
}
