import { useEffect } from "react"

const useTitle=(title)=>{
      useEffect(()=>{
            document.title=`${title} -ema-jhon`
      },[title])
}

export default useTitle