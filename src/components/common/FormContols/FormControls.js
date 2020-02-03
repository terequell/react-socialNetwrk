import React from 'react'

export const Textarea = ({input, meta, ...restProps}) => {
   let hasError = meta.touched && meta.error
   return (
      <div>
         <textarea {...input} {...restProps}/>
         {hasError ? <span>{meta.error}</span> : null}
      </div>
 
   )
}

export const Input = ({input, meta, ...restProps}) => {
   let hasError = meta.touched && meta.error
   return (
      <div>
         <input {...input} {...restProps}/>
         {hasError ? <span>{meta.error}</span> : null}
      </div>
   )
}