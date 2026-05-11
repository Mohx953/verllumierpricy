import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { AsciiArt } from "@/components/ui/ascii-art";
import BackgroundGradientAnimationDemo from './components/background-gradient-animation-demo'
import ThreeDMarqueeDemo from './components/3d-marquee-demo'
import ImagesSliderDemo from './components/images-slider-demo'
import WavyBackgroundDemo from './components/wavy-background-demo'
import SquigglyTextDemo from './components/squiggly-text-demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BackgroundGradientAnimationDemo/> */}
    <ImagesSliderDemo/>
    <ThreeDMarqueeDemo/>
    {/* <SquigglyTextDemo/> */}
    </>
  )
}

export default App
