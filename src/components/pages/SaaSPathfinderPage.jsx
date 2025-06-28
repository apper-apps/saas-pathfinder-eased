import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import FeatureSelector from "@/components/organisms/FeatureSelector";
import ComparisonSection from "@/components/organisms/ComparisonSection";
import FinalRecommendation from "@/components/organisms/FinalRecommendation";
import Button from "@/components/atoms/Button";
import ProgressBar from "@/components/molecules/ProgressBar";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import { getComparisons, getFeatures } from "@/services/api/pathfinderService";
import { comparisonsData, featuresData } from "@/services/mockData/pathfinderData";

const SaaSPathfinderPage = () => {
const [features, setFeatures] = useState([])
  const [comparisons, setComparisons] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [currentStep, setCurrentStep] = useState('selection')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState({})
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

const handleQuestionAnswer = (featureId, answer) => {
    setAnsweredQuestions(prev => ({
      ...prev,
      [featureId]: answer
    }))

    if (answer) {
      setSelectedFeatures(prev => 
        prev.includes(featureId) ? prev : [...prev, featureId]
      )
    } else {
      setSelectedFeatures(prev => prev.filter(id => id !== featureId))
    }

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < features.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1)
      } else {
        // All questions answered, move to confirmation
        setCurrentStep('confirmation')
        const totalAnswered = Object.keys(answeredQuestions).length + 1
        const selectedCount = Object.values({...answeredQuestions, [featureId]: answer}).filter(Boolean).length
        toast.success(`All questions completed! ${selectedCount} features selected`)
      }
    }, 500)
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < features.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

const handleContinue = () => {
    if (selectedFeatures.length > 0) {
      setCurrentStep('confirmation')
      toast.success(`${selectedFeatures.length} features selected`)
    }
  }
  const handleConfirmContinue = () => {
    setCurrentStep('comparison')
    toast.success(`Analyzing ${selectedFeatures.length} selected features`)
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

    // If user selected mostly "No" (fewer than half of available features), recommend Lovable
    if (selectedFeatures.length < features.length / 2) {
      setFinalRecommendation('Lovable')
    } else {
      // Use comparison-based logic for users who need many features
      const apperWins = relevantComparisons.filter(comp => comp.winner === 'Apper').length
      const lovableWins = relevantComparisons.filter(comp => comp.winner === 'Lovable').length
      const ties = relevantComparisons.filter(comp => comp.winner === 'Tie').length

      // Apper wins if it has more wins or equal wins with ties
      if (apperWins > lovableWins || (apperWins === lovableWins && ties > 0)) {
        setFinalRecommendation('Apper')
      } else {
        setFinalRecommendation('Lovable')
      }
    }

    // Show final recommendation after all comparisons are visible
    setTimeout(() => {
      setCurrentStep('recommendation')
    }, relevantComparisons.length * 800 + 1000)
  }

const handleRestart = () => {
    setSelectedFeatures([])
    setCurrentStep('selection')
    setCurrentQuestionIndex(0)
    setAnsweredQuestions({})
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
              currentQuestionIndex={currentQuestionIndex}
              answeredQuestions={answeredQuestions}
              onQuestionAnswer={handleQuestionAnswer}
              onPreviousQuestion={handlePreviousQuestion}
              onNextQuestion={handleNextQuestion}
              onContinue={handleContinue}
              canContinue={selectedFeatures.length > 0}
            />
          </motion.div>
)}

        {currentStep === 'confirmation' && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-3">
              <div className="inline-flex items-center space-x-2 text-primary-600 mb-2">
                <span className="text-sm font-medium uppercase tracking-wide">Review</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Review Your Selected Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Please review your feature selections before we analyze the best platform for your needs.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Selected Features ({selectedFeatures.length})</h3>
                <div className="grid gap-4 mb-8">
                  {getSelectedFeatureLabels().map((featureLabel, index) => (
                    <motion.div
                      key={featureLabel}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-800 font-medium">{featureLabel}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep('selection')}
                    className="flex items-center space-x-2"
                  >
                    <ApperIcon name="ArrowLeft" size={16} />
                    <span>Go Back & Modify</span>
                  </Button>
                  <Button
                    onClick={handleConfirmContinue}
                    className="flex items-center space-x-2"
                  >
                    <span>Continue to Analysis</span>
                    <ApperIcon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </div>
            </div>
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