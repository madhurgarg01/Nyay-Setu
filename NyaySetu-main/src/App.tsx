import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AIBot from './pages/AIBot';
import FindLawyer from './pages/FindLawyer';
import DocumentAnalysis from './pages/DocumentAnalysis';
import CasePrediction from './pages/CasePrediction';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <motion.main className="pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ai-bot" element={<AIBot />} />
                <Route path="/find-lawyer" element={<FindLawyer />} />
                <Route path="/document-analysis" element={<DocumentAnalysis />} />
                <Route path="/case-prediction" element={<CasePrediction />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;