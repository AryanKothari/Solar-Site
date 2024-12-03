'use client'
import Image from 'next/image'
import { FC, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface MediaTextSectionProps {
  mediaType: 'image' | 'video'
  mediaSrc: string
  title: string
  description: string
  expandedContent: string
  imageAlt?: string
  reverse?: boolean
}

const MediaTextSection: FC<MediaTextSectionProps> = ({
  mediaType,
  mediaSrc,
  title,
  description,
  expandedContent,
  imageAlt = '',
  reverse = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-7xl mx-auto ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} flex flex-col md:items-center md:space-x-8`}>
        <div className="md:w-1/2 mb-8 md:mb-0">
          {mediaType === 'image' ? (
            <Image
              src={mediaSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          ) : (
            <video
              src={mediaSrc}
              controls
              className="rounded-lg w-full h-full"
              aria-label={title}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-4">{description}</p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            aria-expanded={isExpanded}
            aria-controls="expanded-content"
          >
            {isExpanded ? 'Read less' : 'Read more'}
            {isExpanded ? (
              <ChevronUp className="ml-2 w-5 h-5" />
            ) : (
              <ChevronDown className="ml-2 w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div 
          id="expanded-content"
          className="max-w-7xl mx-auto mt-8 text-gray-600 leading-relaxed"
        >
          <p>{expandedContent}</p>
        </div>
      )}
    </section>
  )
}

export default MediaTextSection

