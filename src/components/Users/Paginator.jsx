import React, { useState } from 'react'
import styles from './Users.module.css'

const Paginator = (props) => {
   let [currentPortion, setCurrentPortion] = useState(1)

   const pagesOnPortion = 10
   let pagesCount = Math.ceil(props.totalCount/props.usersOnPage)
   let portionsCount = Math.ceil(pagesCount/pagesOnPortion)
   let pages = []

   let leftBorderNumberPage = (currentPortion - 1) * pagesOnPortion + 1
   let rightBorderNumberPage = currentPortion * pagesOnPortion
   
   for(let i = 1; i < pagesCount; i++){
      pages.push(i)
   } 

   return (
      <div>
         {currentPortion > 1 ? <button onClick = {() => setCurrentPortion(currentPortion - 1)}>PREV</button> : null}
         {pages
            .filter(num => num >= leftBorderNumberPage && num <= rightBorderNumberPage)
            .map(page => <span onClick = {() => props.changeUsers(page)} className = {props.currentPage === page ? styles.currentPage : styles.numberOfPage}>{page}</span>)}
         {portionsCount > currentPortion ? <button onClick = {() => setCurrentPortion(currentPortion + 1)}>NEXT</button> : null}
      </div>
   )
}

export default Paginator