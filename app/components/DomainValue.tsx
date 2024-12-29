'use client'

import { motion } from 'framer-motion'

export function DomainValue() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-bold">Priced to Make Moves.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ValueCard
          title="Current Value"
          value="$1,470"
          description="For 24 hours only. After that, good luck."
        />
        <ValueCard
          title="Last Sale"
          value="$1,695"
          description="Similar domain? isellbeer.com. Sold for this much."
        />
        <ValueCard
          title="Make History"
          value="Priceless"
          description="Be the one who turns isellbusiness.com into the next game-changer."
          special
        />
      </div>
    </motion.section>
  )
}

function ValueCard({ title, value, description, special = false }: { title: string, value: string, description: string, special?: boolean }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all ${special ? 'border-2 border-yellow-500' : ''}`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <motion.div 
        className={`text-4xl font-bold mb-2 ${special ? 'text-yellow-400' : 'text-green-400'}`}
        whileHover={{ scale: 1.1 }}
      >
        {value}
      </motion.div>
      <p className="text-sm text-neutral-400">{description}</p>
    </motion.div>
  )
}

