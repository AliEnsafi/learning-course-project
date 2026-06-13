
import { Navbar , Header , LearnMore , OurCourses , WhyUs , FirstSlider , Article
        , SecondSlider , Reactions , Footer } from '@/components/homePageImport'


export default function Home() {

  return (

    <>
      <Navbar />
      <Header />

      {/* main */}
      <LearnMore />
      <OurCourses />
      <WhyUs />
      <FirstSlider />
      <Article />
      <SecondSlider />
      <Reactions />

      <Footer />
    </>
  )
}
