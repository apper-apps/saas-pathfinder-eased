import React from 'react'
import { motion } from 'framer-motion'

const Loading = ({ className = "" }) => {
  return (
    <div className={`animate-pulse space-y-6 ${className}`}>
      {/* Header skeleton */}
      <div className="space-y-3">
        <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
      </div>
      
      {/* Feature selection skeleton */}
      <div className="space-y-4">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-5 h-5 bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded flex-1"></div>
          </motion.div>
        ))}
      </div>
      
      {/* Button skeleton */}
      <div className="h-12 bg-gradient-to-r from-primary-200 to-primary-300 rounded-xl w-32"></div>
    </div>
  )
}

export default Loading