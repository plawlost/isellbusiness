'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CountdownTimer } from './components/CountdownTimer'
import { DomainValue } from './components/DomainValue'
import { Vision } from './components/Vision'
import { AsciiAnimation } from './components/AsciiAnimation'
import { PurchaseOptions } from './components/PurchaseOptions'

export default function Page() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        className="fixed inset-0 bg-[url('/grid.svg')] opacity-20"
        style={{ opacity }}
      />
      
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-8">
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-white/90 transition-colors font-bold text-lg"
          >
            claim domain now ↗
          </Button>
          <CountdownTimer />
        </header>

        <section className="min-h-screen flex flex-col justify-center items-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl w-full text-center"
          >
            <div className="mb-12">
              <AsciiAnimation />
            </div>
            <motion.h1 
              className="text-6xl sm:text-8xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-transparent bg-clip-text"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ 
                duration: 10, 
                ease: 'linear', 
                repeat: Infinity 
              }}
            >
              isellbusiness.com
            </motion.h1>
            <p className="text-xl sm:text-3xl text-neutral-400 max-w-2xl mx-auto">
              Where businesses start over, and ideas never die.
            </p>
          </motion.div>
        </section>

        <div className="bg-black">
          <div className="max-w-6xl mx-auto px-8 py-24 space-y-24">
            <DomainValue />
            <Vision />
          </div>
        </div>

        <PurchaseOptions />
      </div>

      <footer className="bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-neutral-500 mb-4 sm:mb-0">
            Listed on Afternic. Fast transfer eligible. 24/7 support.
          </div>
          <div className="text-lg font-bold text-center sm:text-right">
            <p>isellbusiness.com: Your next big move, fast.</p>
            <p className="text-sm text-yellow-400 mt-2">Every second counts. isellbusiness.com could be yours today.</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-center space-x-4">
          <img src="/placeholder.svg?height=30&width=100" alt="Afternic" className="h-8" />
          <img src="/placeholder.svg?height=30&width=100" alt="GoDaddy" className="h-8" />
        </div>
      </footer>
    </div>
  )
}

