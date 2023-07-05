import { useState, useEffect } from 'react';

const useCounter= (counterType)=>{
    let sumType= 1

    if(counterType==="backward"){
        sumType= -1
    }

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + sumType);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [sumType]);

    return counter
}

export default useCounter