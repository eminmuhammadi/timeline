import Head from 'next/head'
import { CSSProperties, useEffect, useState } from 'react'
import style from './style/page.module.css'

const getBgStyle = (rand: number): CSSProperties => {
  let url = `https://picsum.photos/1920/1080.webp?grayscale`

  if (typeof window !== 'undefined') {
    const { innerWidth } = window

    if (innerWidth < 720) {
      url = `https://picsum.photos/720/1080.webp?grayscale`
    }

    if (innerWidth >= 720 && innerWidth < 1440) {
      url = `https://picsum.photos/1440/1080.webp?grayscale`
    }

    if (innerWidth >= 1440) {
      url = `https://picsum.photos/1920/1080.webp?grayscale`
    }
  }

  return {
    backgroundImage: `url(${url}&${rand})`,
  }
}

const Welcome = (): React.ReactNode => {
  const initialState = getBgStyle(0)
  const min = 1
  const max = 1000

  const [state, setState] = useState({
    title: 'Fresh',
    style: initialState,
    int: min + Math.random() * (max - min),
  })

  // each 30 seconds, change the background image
  useEffect(() => {
    const interval = setInterval(() => {
      setState({
        ...state,
        style: getBgStyle(state.int),
        int: min + Math.random() * (max - min),
      })
    }, 13 * 1000)

    return () => clearInterval(interval)
  }, [state])

  return (
    <>
      <Head>
        <title>Fresh</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={style.page}>
        <div className={`${style.bg}`} style={state.style} />
        <div className={style.banner}>
          <div className={style.banner_container}>
            <h1 className={style.title}>{state.title}</h1>
            <p className={style.slogan}>Voices of truth, not hate</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
