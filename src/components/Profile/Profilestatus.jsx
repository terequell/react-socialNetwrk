import React, {useState, useEffect} from 'react'

const Profilestatus = React.memo((props) => {
   console.log('RENDERED')
   let [editMode, setEditMode] = useState(false)
   let [currentStatus, setCurrentStatus] = useState('')

   let activateEditMode = () => {
      setEditMode(true)
   }

   let deActivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(currentStatus)
   }

   let onChangeStatus = (e) => {
      setCurrentStatus(e.target.value)
   }

   useEffect(() => {
         setCurrentStatus(props.status)
      }, [props.status]
   )
      return(
         <div>
            {editMode 
               ? <input onChange = {onChangeStatus} autoFocus = {true} onBlur = {deActivateEditMode} value = {currentStatus}/>
            : <span onClick = {activateEditMode}>{props.status || '---'}</span>}
         </div>
      )
   }
)

export default Profilestatus