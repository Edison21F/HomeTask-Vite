import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { DrinksSection } from "@/components/drinks-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <DrinksSection />
      <Footer />
    </main>
  )
}

