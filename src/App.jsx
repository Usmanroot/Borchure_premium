import React from 'react'
import NavbarGaming from './Navbars/NavbarGaming.jsx'
import Hero from './components/Hero.jsx'
import Twitch_Player from './components/Twitch_Player.jsx'
import Swiper_Cyber from './Swipers/Swiper_Cyber.jsx'
import SetUp from './components/SetUp.jsx'
import Clips from './components/Clips.jsx'
import Merch from './components/Merch.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import { Milestones } from './components/Milestones.jsx'
import Footer from './components/Footer_gamer.jsx'
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <NavbarGaming/>
      <ScrollReveal variant="fade-down">
        <Hero/>
      </ScrollReveal>
      <div className="py-20 flex justify-center px-6 bg-zinc-900" id="stream">
        <ScrollReveal variant="fade-right">
          <Twitch_Player className="flex justify-center items-center h-screen"/>
        </ScrollReveal>
      </div>
      <div className="py-20 flex justify-center px-6 bg-black " id='pc'>
        <ScrollReveal variant="fade-left">
          <SetUp/>
        </ScrollReveal>
      </div>
      <div className="py-20 flex justify-center px-6 bg-zinc-900">
        <ScrollReveal variant="fade-up">
          <Clips/>
        </ScrollReveal>
      </div>
      <div className="py-20 flex justify-center px-6 bg-black" id='merch'>
        <ScrollReveal variant="fade-right">
          <Merch/>
        </ScrollReveal>
      </div>
      <div className="py-20 flex justify-center px-6 bg-zinc-900">
        <ScrollReveal variant="fade-up">
          <Swiper_Cyber />
        </ScrollReveal>
      </div>
      <div className="py-20 flex justify-center px-6 bg-black" id='milestone'>
        <ScrollReveal variant="fade-up">
          <Milestones />
        </ScrollReveal>
        <Analytics/>
      </div>
      <Footer />
    </div>
  )
}
