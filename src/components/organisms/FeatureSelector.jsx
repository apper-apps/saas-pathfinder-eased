import React from 'react'
import { motion } from 'framer-motion'
import FeatureCheckbox from '@/components/molecules/FeatureCheckbox'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const FeatureSelector = ({ features, selectedFeatures, onFeatureToggle, onContinue, canContinue }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 text-primary-600 mb-2">
          <ApperIcon name="ChevronDown" size={24} />
          <span className="text-sm font-medium uppercase tracking-wide">Step 1</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">What matters most to you?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select one or more features that are important for your SaaS project. 
          We'll show you how different platforms compare based on your priorities.
        </p>
      </div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FeatureCheckbox
              feature={feature}
              checked={selectedFeatures.includes(feature.id)}
              onChange={() => onFeatureToggle(feature.id)}
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-6">
        <Button
          onClick={onContinue}
          disabled={!canContinue}
          icon="ArrowRight"
          iconPosition="right"
          size="lg"
          className={`transition-all duration-300 ${
            canContinue ? 'opacity-100 transform scale-100' : 'opacity-50 transform scale-95'
          }`}
        >
          Continue
        </Button>
      </div>
    </motion.div>
  )
}

export default FeatureSelector