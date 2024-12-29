import { motion } from 'framer-motion'

interface VisionCardProps {
  title: string
  description: string
}

export const VisionCard: React.FC<VisionCardProps> = ({ title, description }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-green-900 to-blue-900 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

