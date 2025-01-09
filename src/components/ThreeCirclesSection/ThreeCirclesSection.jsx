import { CircleCard } from "../CircleCard/CircleCard"

export const ThreeCirclesSection = () => {
  return (
    <section>
        <h1>Vi skaber lækkert! brød</h1>
        <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
        <section>
          <CircleCard title='KREATIVITET DYRKES' subtext='Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud' image='article.jpg'/>
          <CircleCard title='VI ELSKER BRØD' subtext='Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud' image='article2.jpg'/>
          <CircleCard title='SANS FOR DETALJER' subtext='Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud' image='article3.jpg'/>
        </section>
    </section>
  )
}