import style from './SectionWrapper.module.scss'

export const SectionWrapper = ({children, styleClass}) => {
  return (
    <section className={`${style[styleClass]}`}>
        {children}
    </section>
  )
}