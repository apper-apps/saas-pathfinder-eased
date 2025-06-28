import React from 'react'
import { motion } from 'framer-motion'
import ComparisonRow from '@/components/molecules/ComparisonRow'
import ComparisonResult from '@/components/molecules/ComparisonResult'
import ApperIcon from '@/components/ApperIcon'

const ComparisonSection = ({ comparison, isVisible }) => {
  if (!isVisible) return null

return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg overflow-hidden mx-2 sm:mx-0"
    >
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center space-x-2 sm:space-x-3 text-white">
          <ApperIcon name="CheckSquare" size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold">{comparison.title}</h3>
        </div>
      </div>
<div className="overflow-x-auto mobile-scroll">
        <table className="w-full min-w-[500px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-gray-900 text-sm sm:text-base">Feature</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-gray-900 text-sm sm:text-base">Apper</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-gray-900 text-sm sm:text-base">Lovable</th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, index) => (
              <ComparisonRow
                key={index}
                label={row.label}
                apperValue={row.apperValue}
                lovableValue={row.lovableValue}
                apperStatus={row.apperStatus}
                lovableStatus={row.lovableStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
<div className="p-4 sm:p-6">
        <ComparisonResult
          winner={comparison.winner}
          reasoning={comparison.reasoning}
        />
      </div>
    </motion.div>
  )
}

export default ComparisonSection