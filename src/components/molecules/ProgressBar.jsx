import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ProgressBar = ({ currentStep }) => {
const steps = [
    { id: 'selection', label: 'Select Features', number: 1 },
    { id: 'confirmation', label: 'Review Selection', number: 2 },
    { id: 'comparison', label: 'Compare Options', number: 3 },
    { id: 'recommendation', label: 'Get Recommendation', number: 4 }
  ]

  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep)
  }

  const currentStepIndex = getCurrentStepIndex()

return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line Background */}
        <div className="absolute top-5 sm:top-6 left-0 w-full h-0.5 bg-gray-200 z-0" />
        
        {/* Progress Line Fill */}
        <motion.div 
          className="absolute top-5 sm:top-6 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 z-10"
          initial={{ width: '0%' }}
          animate={{ 
            width: currentStepIndex === 0 ? '0%' : 
                   currentStepIndex === 1 ? '33.33%' : 
                   currentStepIndex === 2 ? '66.66%' : '100%'
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex
          const isCurrent = index === currentStepIndex
          const isUpcoming = index > currentStepIndex

          return (
            <div key={step.id} className="flex flex-col items-center relative z-20">
              {/* Step Circle */}
              <motion.div
                className={`
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isCompleted 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 border-transparent text-white' 
                    : isCurrent 
                    ? 'bg-white border-primary-500 text-primary-600' 
                    : 'bg-white border-gray-300 text-gray-400'
                  }
                `}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {isCompleted ? (
                  <ApperIcon name="Check" size={18} className="sm:w-5 sm:h-5" />
                ) : (
                  <span className="font-semibold text-sm sm:text-base">{step.number}</span>
                )}
              </motion.div>

              {/* Step Label */}
              <motion.div
                className="mt-2 sm:mt-3 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <p className={`
                  text-xs sm:text-sm font-medium transition-colors duration-300 px-1
                  ${isCurrent 
                    ? 'text-primary-600' 
                    : isCompleted 
                    ? 'text-gray-700' 
                    : 'text-gray-400'
                  }
                `}>
                  <span className="hidden sm:inline">{step.label}</span>
                  <span className="sm:hidden">{step.label.split(' ')[0]}</span>
                </p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressBar