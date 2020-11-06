import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection/Index';
import { homeObjOne } from '../components/InfoSection/Data';


function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
  
  
    return (
        <>
       
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection  />
            <InfoSection {...homeObjOne}/>
    
        </>
    )
}

export default Home
