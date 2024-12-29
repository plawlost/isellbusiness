'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Repeat, ShoppingCart, Lightbulb } from 'lucide-react'

export function Vision() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-bold">This Is Bigger Than a Domain.</h2>
      <p className="text-xl text-neutral-400 max-w-3xl">
        It's a blank canvas for the bold. A starting line for the next great thing.
      </p>
      <p className="text-lg text-neutral-300 max-w-3xl">
        What if businesses didn't just fail? What if they evolved? isellbusiness.com is for those who see the opportunity in starting over.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <VisionCard
          icon={<Repeat className="w-8 h-8" />}
          title="Rebuild"
          description="A space for breathing new life into old ventures."
          callout="Find hidden value in what others overlook."
        />
        <VisionCard
          icon={<ShoppingCart className="w-8 h-8" />}
          title="Resell"
          description="A marketplace for entrepreneurs to thrive."
          callout="Your gateway to the future of entrepreneurship."
        />
        <VisionCard
          icon={<Lightbulb className="w-8 h-8" />}
          title="Redefine"
          description="A hub for the fearless to change the game."
          callout="Because bold moves change everything."
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <Button 
          size="lg"
          className="bg-white text-black hover:bg-white/90 transition-colors font-bold text-lg"
        >
          Claim Domain Now
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="text-white border-white/20 hover:bg-white hover:text-black transition-colors font-bold text-lg"
        >
          Contact Us
        </Button>
      </div>
    </motion.section>
  )
}

function VisionCard({ icon, title, description, callout }: { icon: React.ReactNode, title: string, description: string, callout: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all"
    >
      <motion.div 
        className="text-[#00ffff] mb-4"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-neutral-400 mb-4">{description}</p>
      <p className="text-xs text-yellow-400 italic">{callout}</p>
    </motion.div>
  )
}

