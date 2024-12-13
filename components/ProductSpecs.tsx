import { motion } from 'framer-motion'

interface ProductSpecsProps {
  section: number
}

export default function ProductSpecs({ section }: ProductSpecsProps) {
  const specs = [
    {
      title: 'Revolutionary Design',
      description: 'Sleek, modern, and built to last. Our product sets a new standard in engineering excellence.'
    },
    {
      title: 'Unparalleled Performance',
      description: 'Cutting-edge technology ensures top-tier performance in every aspect of operation.'
    },
    {
      title: 'Eco-Friendly Innovation',
      description: 'Designed with sustainability in mind, reducing environmental impact without compromising on quality.'
    }
  ]

  const currentSpec = specs[section]

  return (
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-4">{currentSpec.title}</h2>
      <p className="text-xl text-gray-600">{currentSpec.description}</p>
    </motion.div>
  )
}

