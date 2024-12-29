import { motion } from 'framer-motion'
import Link from 'next/link'

interface NeonButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'outline'
}

export const NeonButton: React.FC<NeonButtonProps> = ({ href, children, variant = 'default' }) => {
  const baseClasses = "px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out"
  const variantClasses = variant === 'default' 
    ? "bg-green-500 text-black hover:bg-green-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]"
    : "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black shadow-[0_0_15px_rgba(250,204,21,0.5)]"

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} className={`${baseClasses} ${variantClasses}`}>
        {children}
      </Link>
    </motion.div>
  )
}

