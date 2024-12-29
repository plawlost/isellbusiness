import { motion } from 'framer-motion'

interface DomainData {
  domain: string
  price: number
}

interface DomainTableProps {
  data: DomainData[]
}

export const DomainTable: React.FC<DomainTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full max-w-2xl mx-auto">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="px-4 py-2 text-left">Domain</th>
            <th className="px-4 py-2 text-right">Sold For</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <motion.tr 
              key={item.domain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-700"
            >
              <td className="px-4 py-2">{item.domain}</td>
              <td className="px-4 py-2 text-right">${item.price}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

