import { NewsletterSection } from "../components/NewsletterSection/NewsletterSection"
import { ProductSection } from "../components/ProductSection/ProductSection"
import { SectionWrapper } from "../components/SectionWrapper/SectionWrapper"
import { Slider } from "../components/Slider/Slider"
import { ThreeCirclesSection } from "../components/ThreeCirclesSection/ThreeCirclesSection"

export const Frontpage = () => {
  return (
    <div>
        <Slider/>
        <SectionWrapper>
          <ThreeCirclesSection/>
        </SectionWrapper>
        <SectionWrapper>
          <NewsletterSection/>
        </SectionWrapper>
        <ProductSection/>
    </div>
  )
}