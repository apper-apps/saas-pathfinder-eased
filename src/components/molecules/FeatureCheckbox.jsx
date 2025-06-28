import React from 'react'
import { motion } from 'framer-motion'
import Checkbox from '@/components/atoms/Checkbox'

const FeatureCheckbox = ({ feature, checked, onChange, disabled = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
        checked 
          ? 'border-primary-300 bg-gradient-to-r from-primary-50 to-purple-50' 
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <Checkbox
        id={feature.id}
        label={feature.label}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </motion.div>
  )
}

export default FeatureCheckbox