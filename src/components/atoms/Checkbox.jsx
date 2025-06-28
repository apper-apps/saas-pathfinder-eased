import React from 'react'
import { motion } from 'framer-motion'

const Checkbox = ({ 
  id, 
  label, 
  checked, 
  onChange, 
  disabled = false, 
  className = '' 
}) => {
  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      className={`flex items-center space-x-3 ${className}`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      />
      <label 
        htmlFor={id} 
        className={`text-gray-700 font-medium select-none ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {label}
      </label>
    </motion.div>
  )
}

export default Checkbox