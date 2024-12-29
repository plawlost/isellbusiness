'use client'

import { motion } from 'framer-motion'

const sales = [
  { domain: 'isellbeer.com', price: 1695 },
  { domain: 'ibuyflorida.com', price: 1500 },
]

export function SimilarSales() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold">Similar Sales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sales.map((sale, index) => (
          <motion.div 
            key={sale.domain}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
          >
            <div className="font-mono text-lg">{sale.domain}</div>
            <div className="text-3xl font-bold text-green-400">${sale.price}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

