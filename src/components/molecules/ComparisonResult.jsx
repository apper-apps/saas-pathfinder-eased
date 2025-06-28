import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ComparisonResult = ({ winner, reasoning }) => {
  const isApperWinner = winner === 'Apper'
  const isTie = winner === 'Tie'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-4 p-4 rounded-xl border-l-4 ${
        isTie ? 'border-info bg-blue-50' :
        isApperWinner ? 'border-success bg-green-50' : 'border-primary-400 bg-purple-50'
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-lg ${
          isTie ? 'bg-info text-white' :
          isApperWinner ? 'bg-success text-white' : 'bg-primary-500 text-white'
        }`}>
          <ApperIcon name={isTie ? "Scale" : "Trophy"} size={16} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">
            {isTie ? 'Result: Tie' : `Result: ${winner} wins`}
          </h4>
          <p className="text-gray-700 text-sm">{reasoning}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default ComparisonResult