import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'core-js/proposals/array-grouping-stage-3-2'

export default function Home() {
  
  const res = [1, 2, 3, 4, 5].group(it => it % 2)
  const map = [1, 2, 3, 4, 5].groupToMap(it => it % 2)

  return (
    <>
      <Head>
        <title>Про мене</title>
        <meta name="description" content="Про мене та мої плани на майбутнє" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.code}>
          <h1 className={styles.name}>Прізвище, ім'я: Климчук Богдан</h1>
          <h2 className={styles.subtitle}>Напрямок, за яким планую розвиватись: Frontend-розробка</h2>
          <h2 className={styles.subtitle}>Персональна сертифікація: AWS Certified Solutions Architect - Associate</h2>
          <br></br>
          <p className={styles.description}>
            Я планую складати сертифікацію AWS Certified Solutions Architect - Associate, оскільки ця сертифікація є однією з найбільш вимогливих та популярних сертифікацій серед розробників. Вона підтверджує знання з проектування та розгортання систем на Amazon Web Services (AWS) та дає можливість показати свої навички та досвід в цій області.
          </p>
        </div>
        <div className={styles.code}>
          <a href='https://github.com/tc39/proposal-array-grouping' target={'_blank'}><h3 className={styles.name}>proposal-array-grouping</h3><br></br><br></br></a>
          import 'core-js/proposals/array-grouping-stage-3-2'<br></br><br></br>
          [1, 2, 3, 4, 5].group(it ={'>'} it % 2); // ={'>'} {'{'} 1: [{res[1].join(', ')}], 0: [{res[0].join(', ')}] {'}'}<br></br><br></br>
          const map = [1, 2, 3, 4, 5].groupToMap(it ={'>'} it % 2);<br></br>
          map.get(1); // ={'>'} [{map.get(1).join(', ')}]<br></br>
          map.get(0); // ={'>'} [{map.get(0).join(', ')}]<br></br>
        </div>
      </main>
    </>
  )
}
