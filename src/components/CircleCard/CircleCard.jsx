import style from './CircleCard.module.scss'

export const CircleCard = ({image, title, subtext}) => {
  return (
    <div className={style.circlecard} >
        <div style={{backgroundImage: `url(../src/assets/images/${image})`}}></div>
        <h2>{title}</h2>
        <p>{subtext}</p>
    </div>
  )
}