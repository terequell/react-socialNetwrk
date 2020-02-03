export const minLength = min => value => 
   value && value.length < min ? `Min length is ${min} characters` : undefined

export const maxLength = max => value => 
   value && value.length > max ? `Must be ${max} characters or more` : undefined

