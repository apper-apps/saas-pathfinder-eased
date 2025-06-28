import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { getFullComparison } from '@/services/api/pathfinderService'

const FullComparisonPage = () => {
  const navigate = useNavigate()
  const [comparisonData, setComparisonData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadComparisonData()
  }, [])

  const loadComparisonData = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getFullComparison()
      setComparisonData(data)
    } catch (err) {
      setError('Failed to load comparison data. Please try again.')
      toast.error('Failed to load comparison data')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loading className="max-w-6xl mx-auto py-12" />
  }

  if (error) {
    return (
      <Error 
        message={error}
        onRetry={loadComparisonData}
        className="max-w-6xl mx-auto py-12"
      />
    )
  }

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 sm:space-y-6 py-8 sm:py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center space-x-2 text-primary-600 mb-4">
            <ApperIcon name="BarChart3" size={24} />
            <span className="text-sm font-medium uppercase tracking-wide">Complete Analysis</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Apper vs Lovable
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive feature-by-feature comparison to help you make the right choice for your SaaS project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center pt-4"
        >
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <ApperIcon name="ArrowLeft" size={16} />
            <span>Back to Pathfinder</span>
          </Button>
        </motion.div>
      </div>

      {/* Comparison Sections */}
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:space-y-12">
        {comparisonData.map((category, categoryIndex) => (
          <motion.div
            key={category.Id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            {/* Category Header */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 px-6 sm:px-8 py-4 sm:py-6 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{categoryIndex + 1}</span>
                </div>
                <span>{category.name}</span>
              </h2>
            </div>

            {/* Features Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-6 sm:px-8 py-4 text-sm font-semibold text-gray-900 w-1/3">
                      Feature
                    </th>
                    <th className="text-left px-6 sm:px-8 py-4 text-sm font-semibold text-gray-900 w-1/3">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-success rounded-full"></div>
                        <span>Apper</span>
                      </div>
                    </th>
                    <th className="text-left px-6 sm:px-8 py-4 text-sm font-semibold text-gray-900 w-1/3">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                        <span>Lovable</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.features.map((feature, featureIndex) => (
                    <motion.tr
                      key={feature.Id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (featureIndex * 0.05) }}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 sm:px-8 py-4 sm:py-6">
                        <div className="font-medium text-gray-900 text-sm sm:text-base">
                          {feature.name}
                        </div>
                      </td>
                      <td className="px-6 sm:px-8 py-4 sm:py-6">
                        <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {feature.apper}
                        </div>
                      </td>
                      <td className="px-6 sm:px-8 py-4 sm:py-6">
                        <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {feature.lovable}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 sm:p-12 mx-4 text-center space-y-6"
      >
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Use our interactive pathfinder to get a personalized recommendation based on your specific needs and priorities.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center">
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="flex items-center space-x-2 mobile-button"
          >
            <ApperIcon name="Route" size={20} />
            <span>Try the Pathfinder</span>
          </Button>
          
          <Button
            variant="success"
            size="lg"
            onClick={() => window.open('https://apper.io/prime-club', '_blank')}
            className="flex items-center space-x-2 mobile-button"
          >
            <ApperIcon name="ExternalLink" size={20} />
            <span>Try Apper Free</span>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default FullComparisonPage