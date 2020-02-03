export const mapMethod = (array, objPropName, condition, newObjProps) => {
   debugger
   return array.map(item => {
      if (item[objPropName] === condition) {
         return {...item, ...newObjProps}
      }
      return item
   })
}