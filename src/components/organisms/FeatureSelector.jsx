import React from 'react'
import { motion } from 'framer-motion'
import FeatureCheckbox from '@/components/molecules/FeatureCheckbox'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const FeatureSelector = ({ 
  features, 
  selectedFeatures, 
  currentQuestionIndex, 
  answeredQuestions,
  onQuestionAnswer, 
  onPreviousQuestion, 
  onNextQuestion, 
  onContinue, 
  canContinue 
}) => {
  const currentFeature = features[currentQuestionIndex]
  const totalQuestions = features.length
  const answeredCount = Object.keys(answeredQuestions).length
  const allQuestionsAnswered = answeredCount === totalQuestions

  if (!currentFeature && !allQuestionsAnswered) {
    return null
  }

return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 sm:space-y-6 px-4"
    >
      <div className="text-center space-y-2 sm:space-y-3">
        <div className="inline-flex items-center space-x-2 text-primary-600 mb-2">
          <ApperIcon name="MessageSquare" size={20} className="sm:w-6 sm:h-6" />
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wide">
            Question {Math.min(currentQuestionIndex + 1, totalQuestions)} of {totalQuestions}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 px-4">
          {allQuestionsAnswered ? "All questions completed!" : "What matters most to you?"}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm sm:text-base">
          {allQuestionsAnswered 
            ? "You've answered all questions. Ready to see your personalized recommendations?"
            : "Answer each question to help us find the perfect platform for your needs."
          }
        </p>
      </div>

      {/* Progress indicator */}
      <div className="max-w-md mx-auto">
        <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2">
          <span>Progress</span>
          <span>{answeredCount}/{totalQuestions}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 sm:h-2">
          <div 
            className="bg-primary-500 h-3 sm:h-2 rounded-full transition-all duration-300"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
{/* Current Question */}
      {!allQuestionsAnswered && currentFeature && (
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={currentFeature.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <FeatureCheckbox
              feature={currentFeature}
              checked={selectedFeatures.includes(currentFeature.id)}
              answered={answeredQuestions[currentFeature.id] !== undefined}
              onAnswer={(answer) => onQuestionAnswer(currentFeature.id, answer)}
            />
          </motion.div>
        </div>
      )}

{/* Navigation and Actions */}
      <div className="flex flex-col items-center space-y-4">
        {!allQuestionsAnswered && (
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-md">
            <Button
              variant="outline"
              onClick={onPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              icon="ChevronLeft"
              size="sm"
              className="w-full sm:w-auto mobile-button"
            >
              Previous
            </Button>
            
            <span className="text-xs sm:text-sm text-gray-500 px-4 text-center">
              {answeredQuestions[currentFeature?.id] !== undefined 
                ? "Question answered" 
                : "Choose Yes or No to continue"
              }
            </span>
            
            <Button
              variant="outline"
              onClick={onNextQuestion}
              disabled={currentQuestionIndex >= totalQuestions - 1}
              icon="ChevronRight"
              iconPosition="right"
              size="sm"
              className="w-full sm:w-auto mobile-button"
            >
              Next
            </Button>
          </div>
        )}

        {/* Continue button - only show when all questions answered */}
        {allQuestionsAnswered && (
          <div className="text-center pt-6 w-full max-w-md">
            <Button
              onClick={onContinue}
              disabled={!canContinue}
              icon="ArrowRight"
              iconPosition="right"
              size="lg"
              className={`w-full mobile-button transition-all duration-300 ${
                canContinue ? 'opacity-100 transform scale-100' : 'opacity-50 transform scale-95'
              }`}
            >
              View Results
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default FeatureSelector