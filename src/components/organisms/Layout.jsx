import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const Layout = ({ children }) => {
return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <ApperIcon name="Route" className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  SaaS Pathfinder
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Find Your Ideal SaaS Builder</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm">
                Compare Tools
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm">
                Resources
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

{/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
        {children}
      </main>
      {/* Footer */}
<footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <ApperIcon name="Route" className="text-white" size={20} />
                </div>
                <span className="text-lg sm:text-xl font-bold">SaaS Pathfinder</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Helping developers make informed decisions about SaaS building platforms through comprehensive comparisons.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Resources</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Comparison Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Feature Matrix</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2025 Kevin CKL. Built by Apper to help developers choose the right tools.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout