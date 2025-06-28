import React from 'react'
import StatusIcon from '@/components/atoms/StatusIcon'

const ComparisonRow = ({ label, apperValue, lovableValue, apperStatus, lovableStatus }) => {
return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
      <td className="py-3 sm:py-4 px-3 sm:px-6 font-medium text-gray-900 text-sm sm:text-base">{label}</td>
      <td className="py-3 sm:py-4 px-3 sm:px-6">
        <div className="flex items-center space-x-2">
          <StatusIcon status={apperStatus} />
          <span className="text-gray-700 text-sm sm:text-base">{apperValue}</span>
        </div>
      </td>
      <td className="py-3 sm:py-4 px-3 sm:px-6">
        <div className="flex items-center space-x-2">
          <StatusIcon status={lovableStatus} />
          <span className="text-gray-700 text-sm sm:text-base">{lovableValue}</span>
        </div>
      </td>
    </tr>
  )
}

export default ComparisonRow