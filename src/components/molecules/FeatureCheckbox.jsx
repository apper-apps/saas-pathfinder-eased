import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const FeatureCheckbox = ({ feature, checked, answered = false, onAnswer, disabled = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`p-8 rounded-xl border-2 transition-all duration-300 ${
        answered
          ? checked 
            ? 'border-primary-300 bg-gradient-to-r from-primary-50 to-purple-50 shadow-lg'
            : 'border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100 shadow-md'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
      }`}
    >
      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-lg ${
            checked ? 'bg-primary-100' : 'bg-gray-100'
          }`}>
            <ApperIcon 
              name={feature.icon || 'Settings'} 
              size={20} 
              className={checked ? 'text-primary-600' : 'text-gray-600'} 
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg">{feature.label}</h3>
            {feature.description && (
              <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
            )}
          </div>
        </div>
        
<div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => !disabled && onAnswer(true)}
            disabled={disabled}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
              answered && checked
                ? 'bg-primary-600 text-white shadow-lg ring-2 ring-primary-200'
                : answered && !checked
                ? 'bg-gray-100 text-gray-500 border border-gray-200'
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200 border border-primary-200'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-center justify-center space-x-2">
              <ApperIcon name="Check" size={18} />
              <span className="text-lg">Yes</span>
            </div>
          </motion.button>
<motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => !disabled && onAnswer(false)}
            disabled={disabled}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
              answered && !checked
                ? 'bg-gray-600 text-white shadow-lg ring-2 ring-gray-300'
                : answered && checked
                ? 'bg-gray-100 text-gray-500 border border-gray-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-center justify-center space-x-2">
              <ApperIcon name="X" size={18} />
              <span className="text-lg">No</span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default FeatureCheckbox