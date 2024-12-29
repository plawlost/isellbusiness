import { motion } from 'framer-motion'

interface InfoCardProps {
  title: string
  value: string
  subtext?: string
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, value, subtext }) => {
  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-2">{value}</p>
      {subtext && <p className="text-sm text-gray-400">{subtext}</p>}
    </motion.div>
  )
}

