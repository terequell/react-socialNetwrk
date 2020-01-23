import React from 'react'

export const minLength = min => value => 
   value && value.length < min ? `Min length is ${min} characters` : undefined

export const maxLength = max => value => 
   value && value.length > max ? `Must be ${max} characters or more` : undefined

export const textareaValidated = ({input, meta, ...props}) => {
   return (
      <div>
         <textarea {...input} {...props}/>
         {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
   )
}