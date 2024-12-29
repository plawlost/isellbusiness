import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function PurchaseOptions() {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Choose Your Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PurchaseCard
            title="Buy Now"
            price="$1,470.00"
            description="Own it outright. Start building immediately."
            buttonText="Purchase Domain"
            buttonColor="bg-green-500 hover:bg-green-500 hover:bg-green-600"
          />
          <PurchaseCard
            title="Lease to Own"
            price="$122.50"
            description="Spread the cost. Build as you go."
            buttonText="Start Leasing"
            buttonColor="bg-blue-500 hover:bg-blue-600"
            subtext="Spread your payments and start building immediately."
          />
          <PurchaseCard
            title="Make an Offer"
            price="Your Price"
            description="Have a different number in mind? Let's talk."
            buttonText="Submit Offer"
            buttonColor="bg-yellow-500 hover:bg-yellow-600"
          />
        </div>
      </div>
    </section>
  )
}

function PurchaseCard({ title, price, description, buttonText, buttonColor, subtext }: { 
  title: string, 
  price: string, 
  description: string, 
  buttonText: string, 
  buttonColor: string,
  subtext?: string
}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 rounded-lg p-8 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-4xl font-bold mb-4 text-green-400">{price} {title === "Lease to Own" && <span className="text-lg">/month</span>}</p>
        <p className="text-neutral-400 mb-6">{description}</p>
        {subtext && <p className="text-xs text-blue-300 mb-4">{subtext}</p>}
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`${buttonColor} rounded-lg overflow-hidden`}
      >
        <Button size="lg" className="w-full text-black">
          {buttonText}
        </Button>
      </motion.div>
    </motion.div>
  )
}

