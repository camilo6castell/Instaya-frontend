import React, { useState, useEffect} from 'react'

const Clock = () => {
    const [hora, setHora] = useState("")
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      let interval 
      if (visible) {
        interval = setInterval(()=> setHora(new Date().toLocaleTimeString()),1000)
      } else {
        clearInterval(interval)
        setHora("")
      }
      return () => {
        clearInterval(interval)
        setHora("")
      }
    }, [visible])
    
    return (
      <div className="clock" onClick={() => setVisible(!visible)}>
          {visible ? (
            <span>{hora}</span>
          ) : (
            <span>Ver hora</span>
          )}      
      </div>
  )
}

export { Clock }