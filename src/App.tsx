import { useCallback } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import ContactBar from './components/ContactBar'
import Hero from './components/sections/Hero'
import SelectedWork from './components/sections/SelectedWork'
import About from './components/sections/About'
import ListSection from './components/sections/ListSection'
import Footer from './components/sections/Footer'
import { useActiveSection } from './hooks/useActiveSection'
import {
  navSections,
  experience,
  articles,
  community,
  education,
  type NavSectionId,
} from './data/content'

const NAV_IDS = navSections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(NAV_IDS)

  const handleSelect = useCallback((id: NavSectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-screen">
      {/* M / S navigation */}
      <TopBar onSelect={handleSelect} />

      {/* M / S fixed contact footer */}
      <ContactBar />

      <div className="lg:flex">
        {/* XL / L navigation */}
        <Sidebar active={active} onSelect={handleSelect} />

        <main className="flex-1 px-8 pb-36 pt-4 md:px-10 lg:px-0 lg:pb-16 lg:pt-16 lg:pr-12 xl:pr-20">
          <div className="flex max-w-[1165px] flex-col gap-24 xl:gap-32">
            <Hero />
            <SelectedWork />
            <About />
            <ListSection title="Experience" rows={experience} />
            <ListSection title="Articles" rows={articles} />
            <ListSection title="Community" rows={community} />
            <ListSection title="Education" rows={education} />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}
