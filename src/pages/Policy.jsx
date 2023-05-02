import React, { useEffect } from 'react'
import PolicyIntro from '../components/policy/PolicyIntro'
import PolicySec2 from '../components/policy/PolicySec2'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const Policy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div>
        <PolicyIntro />
        <PolicySec2 />
        <Footer />
    </div>
  )
}

export default Policy