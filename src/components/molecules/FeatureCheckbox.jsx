import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const FeatureCheckbox = ({ feature, checked, onChange, disabled = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
        checked 
          ? 'border-primary-300 bg-gradient-to-r from-primary-50 to-purple-50 shadow-md' 
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
      }`}
    >
      <div className="space-y-4">
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
        
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => !disabled && onChange(true)}
            disabled={disabled}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              checked
                ? 'bg-primary-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-center justify-center space-x-2">
              <ApperIcon name="Check" size={16} />
              <span>Yes</span>
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => !disabled && onChange(false)}
            disabled={disabled}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              !checked
                ? 'bg-gray-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-center justify-center space-x-2">
              <ApperIcon name="X" size={16} />
              <span>No</span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default FeatureCheckbox
