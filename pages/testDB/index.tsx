import React, { useState } from 'react'
import { firestore } from '@component/firebase/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import AuthLayout from '../../layouts/AuthLayout'
import TestUserFirebase from '@component/app/testuserfirebase'

import { storage, auth } from '@component/firebase/firebase'

async function addUserData() {
  try {
    const docRef = await addDoc(collection(firestore, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    })
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

//  const [data, setData] = useState()
  
  async function readUserData() {
  const querySnapshot = await getDocs(collection(firestore, 'users'))
  querySnapshot.forEach((doc) => {
    console.log(doc)
    

    const fetch_data: any = doc.data()
    const data: any = [fetch_data].map((vals) => {
      return (
        <div key={vals.first}>
          <div>{vals.first}</div>
          <div>{vals.last}</div>
          <div>{vals.born}</div>



        </div>
      )
    })
    // setData(data)

    console.log(`${doc.id} => ${doc.data()}`)
    return <div>{doc.id} {data}</div>
  })

  }

  // const user = auth.currentUser

  






const Index = () => {
 
  return (
    <AuthLayout>
        <TestUserFirebase />
    </AuthLayout>
  )
}

export default Index
