'use client'

// import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ProjectPart {
  id: number
  title: string
  description: string
  imageUrl: string
}

const projectParts: ProjectPart[] = [
  {
    id: 1,
    title: "Arduino Nano Microcontroller",
    description: "The brain of our project, processing inputs and controlling motorcontroller outputs.",
    imageUrl: "https://m.media-amazon.com/images/I/61R1A7CuHTL.jpg"
  },
  {
    id: 2,
    title: "Ryobi Brushed Drill",
    description: "We took apart the drill and user the motor, gearbox, and chuck in our final design.",
    imageUrl: "https://images.thdstatic.com/productImages/30cdd64e-b560-437c-8f90-3da447ed73d6/svn/ryobi-power-drills-pcl206b-64_600.jpg"
  },
  {
    id: 3,
    title: "Cytron MD20A Motor Controller" ,
    description: "Takes in commands from the microcontroller and controls the drill motor.",
    imageUrl: "https://m.media-amazon.com/images/I/81nC0GCKh5L.jpg"
  },
  {
    id: 4,
    title: "ESP32 Microcontroller",
    description: "Handles wireless communication with app and controls the LED matrices.",
    imageUrl: "https://m.media-amazon.com/images/I/61o2ZUzB4XL._AC_UF894,1000_QL80_.jpg"
  }
]

export default function EngineeringProjectShowcase() {
  // const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Project Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectParts.map((part) => (
          <motion.div
            key={part.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            // onHoverStart={() => setHoveredId(part.id)}
            // onHoverEnd={() => setHoveredId(null)}
          >
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={part.imageUrl}
                    alt={part.title}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold mb-2">{part.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {part.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

