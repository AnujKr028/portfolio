import {useState , useEffect} from 'react' ; 

const TypingEffect = ({text}) =>{ 

  const[isTypingComplete , setIsTypingComplete] = useState(false) ; 

  useEffect(() => {
    const timer = setTimeout(() => {
    setIsTypingComplete(true);
    }, 3000); // Match this with  animation duration
    
    return () => clearTimeout(timer);
    }, []);
    


    return ( 

      <div className = 'inline-block' >  

      <span className = {`
inline-block overflow-hidden whitespace-nowrap
${!isTypingComplete ? 'border-r-4 border-white-500' : ''}
animate-[typing_3s_steps(30,end)_forwards]
`}

style = {{ 
  width: 0, 
  animationFillMode:'forwards'
}}
> 
        {text}
      </span>
     < style jsx>{`
@keyframes typing {
from { width: 0 }
to { width: 100% }
}
`}</style>
      </div> 


    )
}

export default TypingEffect ; 