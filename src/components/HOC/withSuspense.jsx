import React, { Suspense } from 'react'
import Loading from '../common/Loading'

export const withSuspense = (Component) => {
   return (props) => {
      return <Suspense fallback = {<Loading/>}>
            <Component {...props}/>
         </Suspense>
   }
}