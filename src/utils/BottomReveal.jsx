import React , {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"


const BottomReveal = ({children, width = 'fit-content'}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, )
    const mainControls = useAnimation();
  
    useEffect(()=>{
      if(isInView){
        mainControls.start("visible")
      } else{
        mainControls.start("hidden")
      }
    }, [isInView])
  
    return (
      <div ref={ref} style={{position: 'relative', width, overflow: 'hidden'}}>
        <motion.div
          variants={{
            hidden: {opacity: 0, y: 100},
            visible: {opacity: 1, y: 0}
          }}
          initial='hidden'
          animate={mainControls}
          transition={{duration: 1, delay: 0.5}}
        >{children}</motion.div>
      </div>
    )
  }

export default BottomReveal