'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const frames = [
  `
   _____________________
  |  BUSINESS FOR SALE  |
  |                     |
  |    $ $ $   $ $ $    |
  |    $     $     $    |
  |    $ $ $   $ $ $    |
  |    $         $      |
  |    $         $      |
  |_____________________|
  `,
  `
   _____________________
  |  BUSINESS EVOLVING  |
  |                     |
  |        _____        |
  |       /     \\       |
  |      /       \\      |
  |     /  O   O  \\     |
  |    |    <>    |     |
  |_____________________|
  `,
  `
   _____________________
  | BUSINESS TRANSFORMED|
  |                     |
  |      /\\     /\\      |
  |     /  \\___/  \\     |
  |    |  O     O  |    |
  |     \\  \\___/  /     |
  |      \\       /      |
  |_____________________|
  `
]

export function AsciiAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [flicker, setFlicker] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length)
    }, 2000)

    const flickerInterval = setInterval(() => {
      setFlicker(true)
      setTimeout(() => setFlicker(false), 50)
    }, 3000)

    return () => {
      clearInterval(intervalId)
      clearInterval(flickerInterval)
    }
  }, [])

  return (
    <div className="w-full max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        <motion.pre
          key={currentFrame}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: flicker ? 0.7 : 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-green-400 font-mono text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre overflow-hidden"
        >
          {frames[currentFrame]}
        </motion.pre>
      </AnimatePresence>
    </div>
  )
}

