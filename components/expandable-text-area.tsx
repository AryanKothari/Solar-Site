import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ExpandableTextAreaProps {
  title: string
  content: string
}

const ExpandableTextArea: React.FC<ExpandableTextAreaProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between items-center w-full text-left"
        aria-expanded={isExpanded}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-gray-500" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-500" />
        )}
      </button>
      {isExpanded && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}

export default ExpandableTextArea

