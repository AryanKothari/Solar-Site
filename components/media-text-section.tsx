'use client'
import Image from 'next/image'
import { FC, useState } from 'react'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'

interface MediaItem {
  type: 'image' | 'video'
  src: string
  alt?: string
}

interface MediaTextSectionProps {
  mediaType: 'image' | 'video' | 'album'
  mediaSrc: string | MediaItem[]
  title: string
  description: string
  expandedContent: string
  imageAlt?: string
  reverse?: boolean
  videoHeight?: string
  autoPlay?: boolean
  muted?: boolean
  playsInline?: boolean
  controls?: boolean
  loop?: boolean
}

const MediaTextSection: FC<MediaTextSectionProps> = ({
  mediaType,
  mediaSrc,
  title,
  description,
  expandedContent,
  imageAlt = '',
  reverse = false,
  videoHeight = '',
  autoPlay = false,
  muted = false,
  playsInline = false,
  controls = false,
  loop = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const shouldShowExpand = expandedContent.length > 500

  const handleNextSlide = () => {
    if (Array.isArray(mediaSrc)) {
      setCurrentSlide((prev) => (prev + 1) % mediaSrc.length)
    }
  }

  const handlePrevSlide = () => {
    if (Array.isArray(mediaSrc)) {
      setCurrentSlide((prev) => (prev - 1 + mediaSrc.length) % mediaSrc.length)
    }
  }

  const renderMedia = () => {
    if (mediaType === 'album' && Array.isArray(mediaSrc)) {
      const currentMedia = mediaSrc[currentSlide]
      return (
        <div className="relative">
          <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {currentMedia.type === 'image' ? (
                <Image
                  src={currentMedia.src}
                  alt={currentMedia.alt || ''}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <video
                  src={currentMedia.src}
                  className="w-full h-full object-contain"
                  aria-label={title}
                  autoPlay={true}
                  muted={true}
                  playsInline={true}
                  controls={false}
                  loop={true}
                />
              )}
            </div>
          </div>
          <button
            onClick={handlePrevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {mediaSrc.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      )
    }

    if (mediaType === 'image') {
      return (
        <Image
          src={mediaSrc as string}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-full"
        />
      )
    }

    return (
      <video
        src={mediaSrc as string}
        className={`rounded-lg ${videoHeight}`}
        aria-label={title}
        autoPlay={autoPlay}
        muted={muted}
        playsInline={playsInline}
        controls={controls}
        loop={loop}
      />
    )
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-7xl mx-auto ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} flex flex-col md:items-center md:space-x-8`}>
        <div className="md:w-1/2 mb-8 md:mb-0">
          {renderMedia()}
        </div>
        <div className="md:w-1/2 px-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-4">
            {description}
            {!shouldShowExpand && expandedContent && (
              <>
                <br /><br />
                {expandedContent}
              </>
            )}
          </p>
          {shouldShowExpand && (
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
          )}
        </div>
      </div>
      {isExpanded && shouldShowExpand && (
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

