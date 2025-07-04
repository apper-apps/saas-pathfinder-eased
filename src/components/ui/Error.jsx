import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message, onRetry, className = "" }) => {
return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`text-center p-4 sm:p-8 ${className}`}
    >
      <div className="max-w-md mx-auto">
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-error to-red-600 rounded-full flex items-center justify-center">
          <ApperIcon name="AlertTriangle" className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Something went wrong</h3>
        <p className="text-gray-600 mb-6 text-sm sm:text-base px-4">
          {message || "We encountered an unexpected error. Please try again."}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg hover:shadow-xl mobile-button"
          >
            <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
            Try Again
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default Error