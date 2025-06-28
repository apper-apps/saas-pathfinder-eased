import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const FinalRecommendation = ({ recommendation, selectedFeatures, onRestart }) => {
  const isApperRecommended = recommendation === 'Apper'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 text-primary-600 mb-2">
          <ApperIcon name="Brain" size={24} />
          <span className="text-sm font-medium uppercase tracking-wide">Final Step</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Which Tool is Right for You?</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 border-2 border-primary-200">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg">
              <ApperIcon name="Target" className="text-primary-600" size={24} />
              <span className="font-semibold text-gray-900">Based on your selected priorities:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm"
                >
                  <ApperIcon name="Check" className="text-success" size={16} />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className={`p-8 rounded-2xl border-2 ${
              isApperRecommended 
                ? 'border-success bg-gradient-to-br from-green-50 to-emerald-50' 
                : 'border-primary-400 bg-gradient-to-br from-purple-50 to-blue-50'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className={`p-3 rounded-full ${
                    isApperRecommended ? 'bg-success' : 'bg-primary-500'
                  } text-white`}>
                    <ApperIcon name="Award" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Choose: {recommendation}</h3>
                    <p className="text-gray-600">Recommended for your needs</p>
                  </div>
                </div>

                {isApperRecommended ? (
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                      Perfect for developers who want ease of use, speed to launch, and prefer built-in tools over custom coding.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                      <Button variant="success" icon="ExternalLink">
                        View Full Comparison
                      </Button>
                      <Button variant="success" icon="Play">
                        Watch Apper Demo
                      </Button>
                      <Button variant="secondary" icon="Zap">
                        Try Apper Free
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                      Choose Lovable only if you're deeply familiar with Supabase, want to custom-code everything, 
                      and don't mind stitching together multiple tools.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                      <Button variant="primary" icon="ExternalLink">
                        View Full Comparison
                      </Button>
                      <Button variant="secondary" icon="MessageCircle">
                        Talk to a Specialist
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <Button
            onClick={onRestart}
            variant="outline"
            icon="RotateCcw"
          >
            Start Over
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default FinalRecommendation