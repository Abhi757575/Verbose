import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routing/AppRoutes';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App