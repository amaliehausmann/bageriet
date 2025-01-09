import { CiMail } from "react-icons/ci";

export const NewsletterSection = () => {
  return (
    <section>
        <h1>Tilmeld dig vores nyhedsbrev</h1>
        <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver</p>
        <form>
            <div><CiMail /></div>
            <input type="email" placeholder="indtast din email..."/>
            <input type="submit" value='TILMELD' />
        </form>
    </section>
  )
}