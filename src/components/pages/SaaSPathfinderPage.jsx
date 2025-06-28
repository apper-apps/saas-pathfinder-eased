import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import FeatureSelector from '@/components/organisms/FeatureSelector'
import ProgressBar from '@/components/molecules/ProgressBar'
import ComparisonSection from '@/components/organisms/ComparisonSection'
import FinalRecommendation from '@/components/organisms/FinalRecommendation'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { getFeatures, getComparisons } from '@/services/api/pathfinderService'

const SaaSPathfinderPage = () => {
  const [features, setFeatures] = useState([])
  const [comparisons, setComparisons] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [currentStep, setCurrentStep] = useState('selection')
  const [visibleComparisons, setVisibleComparisons] = useState([])
  const [finalRecommendation, setFinalRecommendation] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (currentStep === 'comparison' && selectedFeatures.length > 0) {
      showComparisonsProgressively()
      calculateRecommendation()
    }
  }, [currentStep, selectedFeatures])

  const loadData = async () => {
    try {
      setLoading(true)
      setError('')
      
      const [featuresData, comparisonsData] = await Promise.all([
        getFeatures(),
        getComparisons()
      ])
      
      setFeatures(featuresData)
      setComparisons(comparisonsData)
    } catch (err) {
      setError('Failed to load comparison data. Please try again.')
      toast.error('Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    )
  }

  const handleContinue = () => {
    if (selectedFeatures.length > 0) {
      setCurrentStep('comparison')
      toast.success(`Analyzing ${selectedFeatures.length} selected features`)
    }
  }

  const showComparisonsProgressively = () => {
    const relevantComparisons = comparisons.filter(comp => 
      selectedFeatures.includes(comp.featureId)
    )

    setVisibleComparisons([])
    
    relevantComparisons.forEach((comparison, index) => {
      setTimeout(() => {
        setVisibleComparisons(prev => [...prev, comparison.featureId])
      }, index * 800)
    })
  }

  const calculateRecommendation = () => {
    const relevantComparisons = comparisons.filter(comp => 
      selectedFeatures.includes(comp.featureId)
    )

    const apperWins = relevantComparisons.filter(comp => comp.winner === 'Apper').length
    const lovableWins = relevantComparisons.filter(comp => comp.winner === 'Lovable').length
    const ties = relevantComparisons.filter(comp => comp.winner === 'Tie').length

    // Apper wins if it has more wins or equal wins with fewer required integrations
    if (apperWins > lovableWins || (apperWins === lovableWins && ties > 0)) {
      setFinalRecommendation('Apper')
    } else {
      setFinalRecommendation('Lovable')
    }

    // Show final recommendation after all comparisons are visible
    setTimeout(() => {
      setCurrentStep('recommendation')
    }, relevantComparisons.length * 800 + 1000)
  }

  const handleRestart = () => {
    setSelectedFeatures([])
    setCurrentStep('selection')
    setVisibleComparisons([])
    setFinalRecommendation('')
    toast.info('Starting fresh comparison')
  }

  const getSelectedFeatureLabels = () => {
    return features
      .filter(feature => selectedFeatures.includes(feature.id))
      .map(feature => feature.label)
  }

  if (loading) {
    return <Loading className="max-w-4xl mx-auto py-12" />
  }

  if (error) {
    return (
      <Error 
        message={error}
        onRetry={loadData}
        className="max-w-4xl mx-auto py-12"
      />
    )
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-purple-600 bg-clip-text text-transparent">
            Find Your Ideal SaaS Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Navigate through our feature-based roadmap to discover which platform matches your development needs. 
            Get personalized recommendations based on what matters most to your project.
          </p>
</motion.div>
      </div>

      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} />

      <AnimatePresence mode="wait">
        {currentStep === 'selection' && (
          <motion.div
            key="selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeatureSelector
              features={features}
              selectedFeatures={selectedFeatures}
              onFeatureToggle={handleFeatureToggle}
              onContinue={handleContinue}
              canContinue={selectedFeatures.length > 0}
            />
          </motion.div>
        )}

        {currentStep === 'comparison' && (
          <motion.div
            key="comparison"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-3">
              <div className="inline-flex items-center space-x-2 text-primary-600 mb-2">
                <span className="text-sm font-medium uppercase tracking-wide">Step 2</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Based on your needs, here's how they compare</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're analyzing each feature you selected to show you detailed comparisons between platforms.
              </p>
            </div>

            <div className="space-y-6">
              {comparisons
                .filter(comp => selectedFeatures.includes(comp.featureId))
                .map((comparison) => (
                  <ComparisonSection
                    key={comparison.featureId}
                    comparison={comparison}
                    isVisible={visibleComparisons.includes(comparison.featureId)}
                  />
                ))}
            </div>
          </motion.div>
        )}

        {currentStep === 'recommendation' && (
          <motion.div
            key="recommendation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FinalRecommendation
              recommendation={finalRecommendation}
              selectedFeatures={getSelectedFeatureLabels()}
              onRestart={handleRestart}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SaaSPathfinderPage