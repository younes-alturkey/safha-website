import Container from "@/components/Container"
import Head, { Metadata } from "@/components/Head"
import md from "@/config/metadata"
import AboutSection from "@/sections/AboutSection"
import ContactSection from "@/sections/ContactSection"
import EndorsementsSection from "@/sections/EndorsementsSection"
import FooterSection from "@/sections/FooterSection"
import GallerySection from "@/sections/GallerySection"
import HeaderSection from "@/sections/HeaderSection"
import HeroSection from "@/sections/HeroSection"
import ProductsSection from "@/sections/ProductsSection"
import ProjectsSection from "@/sections/ProjectsSection"
import ServicesSection from "@/sections/ServicesSection"
import TeamSection from "@/sections/TeamSection"

interface HomeProps {
  metadata: Metadata
}

export default function Home(props: HomeProps) {
  return (
    <Container>
      <Head metadata={props.metadata} />
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProductsSection />
      <GallerySection />
      <TeamSection />
      <EndorsementsSection />
      <ContactSection />
      <FooterSection />
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      metadata: md,
    },
  }
}
