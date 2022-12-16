import style from './page.module.css'

const Welcome = (): React.ReactNode => {
  return (
    <div className={style.page}>
      <div className={`${style.bg} bg-[url(/bg.gif)]`}/>

      <div className={style.banner}>
        <div className={style.banner_container}>
          <h1 className={style.title}>
            Fresh
          </h1>
          <p className={style.slogan}>
            Voices of truth, not hate.
          </p>
        </div>
      </div>

      <div className={style.footer}>
        <span className={style.footer_text}>
          Illustration: Jocelyn Tsaih
        </span>
      </div>
    </div>
  )
}

export default Welcome
