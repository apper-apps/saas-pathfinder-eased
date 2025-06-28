import React from 'react'
import { motion } from 'framer-motion'

const Loading = ({ className = "" }) => {
  return (
    <div className={`animate-pulse space-y-4 sm:space-y-6 px-4 ${className}`}>
      {/* Header skeleton */}
      <div className="space-y-2 sm:space-y-3">
        <div className="h-6 sm:h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4 mx-auto"></div>
        <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 mx-auto"></div>
      </div>
      
      {/* Feature selection skeleton */}
      <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-6 h-6 sm:w-5 sm:h-5 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0"></div>
            <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded flex-1"></div>
          </motion.div>
        ))}
      </div>
      
      {/* Button skeleton */}
      <div className="flex justify-center">
        <div className="h-12 sm:h-10 bg-gradient-to-r from-primary-200 to-primary-300 rounded-xl w-40 sm:w-32"></div>
      </div>
    </div>
  )
}

export default Loading