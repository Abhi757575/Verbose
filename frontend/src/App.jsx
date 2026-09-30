import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routing/AppRoutes';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      
        <AppRoutes /> {/* <-- Must be rendered here */}
      
      <Footer />
    </div>
  )
}

export default App