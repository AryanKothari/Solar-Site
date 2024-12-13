'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ProductModel from './ProductModel'
import ProductSpecs from './ProductSpecs'

export default function ProductDetails() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const [currentSection, setCurrentSection] = useState(0)

  const handleScroll = () => {
    const newSection = Math.floor(scrollYProgress.get() * 3)
    if (newSection !== currentSection) {
      setCurrentSection(newSection)
    }
  }

  return (
    <div ref={containerRef} className="relative" onScroll={handleScroll}>
      <motion.div
        className="h-screen sticky top-0 flex items-center justify-center"
        style={{ opacity, scale }}
      >
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <ProductModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </motion.div>

      <div className="min-h-[300vh]">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="h-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSection === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductSpecs section={index} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

