import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const StatusIcon = ({ status, size = 20 }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'yes':
        return { icon: 'Check', color: 'text-success', bgColor: 'bg-green-100' }
      case 'warning':
        return { icon: 'AlertTriangle', color: 'text-warning', bgColor: 'bg-yellow-100' }
      case 'no':
        return { icon: 'X', color: 'text-error', bgColor: 'bg-red-100' }
      default:
        return { icon: 'Minus', color: 'text-gray-400', bgColor: 'bg-gray-100' }
    }
  }

  const config = getStatusConfig(status)

  return (
    <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${config.bgColor}`}>
      <ApperIcon name={config.icon} size={14} className={config.color} />
    </div>
  )
}

export default StatusIcon