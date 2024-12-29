'use client'

import { useState, useEffect } from 'react'

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +new Date('2024-12-30T17:00:00Z') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value
  }

  return (
    <div className="text-center">
      <div className="text-sm font-mono bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
        {timeLeft.days}d {addLeadingZero(timeLeft.hours)}:{addLeadingZero(timeLeft.minutes)}:{addLeadingZero(timeLeft.seconds)}
      </div>
    </div>
  )
}

