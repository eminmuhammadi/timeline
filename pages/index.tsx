import Head from 'next/head'
import { CSSProperties, useEffect, useState } from 'react'
import style from './style/page.module.css'

const mottos = [
  'Voices of truth, not hate.',
  'Equality for all, not just some.',
  'Love and understanding, not fear and division.',
  'Compassion and kindness, not cruelty and intolerance.',
  'Solidarity and community, not isolation and selfishness.',
  'Hope and progress, not despair and stagnation.',
  'Respect and dignity, not disrespect and prejudice.',
  'Inclusion and diversity, not exclusion and homogeneity.',
  'Justice and fairness, not injustice and inequality.',
  'Empathy and understanding, not apathy and indifference.',
  'Collaboration and cooperation, not competition and conflict.',
  'Honesty and integrity, not deceit and dishonesty.',
  'Perseverance and determination, not giving up and surrender.',
  'Gratitude and appreciation, not entitlement and greed.',
  'Generosity and selflessness, not selfishness and greed.',
  'Patience and understanding, not impatience and judgment.',
  'Forgiveness and mercy, not anger and resentment.',
  'Open-mindedness and flexibility, not closed-mindedness and rigidity.',
  'Wisdom and discernment, not ignorance and narrow-mindedness.',
  'Courage and bravery, not cowardice and fear.',
  'Grace and humility, not pride and ego.',
  'Responsibility and accountability, not irresponsibility and avoidance.',
  'Innovation and creativity, not stagnation and conformity.',
  'Growth and self-improvement, not complacency and stagnation.',
  'Positivity and optimism, not negativity and pessimism.',
  'Balance and harmony, not imbalance and chaos.',
  'Appreciation and mindfulness, not neglect and distraction.',
  'Diligence and hard work, not laziness and procrastination.',
  'Effort and dedication, not mediocrity and complacency.',
  'Passion and enthusiasm, not apathy and boredom.',
  'Loyalty and commitment, not disloyalty and betrayal.',
]

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
    slogan: 'Voices of truth, not hate.',
    style: initialState,
    int: min + Math.random() * (max - min),
  })

  // each 30 seconds, change the background image
  useEffect(() => {
    // random motto from the list
    const motto = mottos[Math.floor(Math.random() * mottos.length)]

    const interval = setInterval(() => {
      setState({
        ...state,
        style: getBgStyle(state.int),
        int: min + Math.random() * (max - min),
        slogan: motto,
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
            <p className={style.slogan}>{state.slogan}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
