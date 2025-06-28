import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/organisms/Layout'
import SaaSPathfinderPage from '@/components/pages/SaaSPathfinderPage'
import FullComparisonPage from '@/components/pages/FullComparisonPage'

function App() {
  return (
    <Router>
<div className="min-h-screen bg-white">
        <Layout>
          <Routes>
            <Route path="/" element={<SaaSPathfinderPage />} />
            <Route path="/full-comparison" element={<FullComparisonPage />} />
          </Routes>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          className="toast-container"
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  )
}

export default App