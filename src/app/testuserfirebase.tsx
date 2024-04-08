import { useState } from 'react'
import { useFireBaseAuth } from './_providers/FireBaseAuthProvider'
import { handleUpload } from './_helpers/uploadFilesFirebase'
import firebase from 'firebase/compat/app'
import { filesize } from 'filesize'

import { storage } from '../firebase/firebase'
import './globals.css'
import { File } from 'buffer'

interface TestUserFirebaseProps {
  addUserData: () => void
  readUserData: () => void
  data: React.ReactNode
}

const TestUserFirebase = ({}: TestUserFirebaseProps) => {
  const [sourcePreview, setSourcePreview] = useState<string | undefined | null>()
  const [uploadFile, setUploadFile] = useState<File | any>()
  const [fileSizeCheck, setFileSizeCheck] = useState<boolean>(false)
  const { user } = useFireBaseAuth()


  const acceptedSize = 250


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | any = event.target.files?.[0] // Get the first selected file
    const fileSize = filesize(file.size, { base: 10, round: 2 }).split(' ')

    if (Number(fileSize[0]) <= acceptedSize) {
      setUploadFile(file)

      const reader = new FileReader()
      reader.onload = () => {
        const url = reader.result as string 
        setSourcePreview(url)
      }
      reader.readAsDataURL(file)
      
    } else if (Number(fileSize[0]) > acceptedSize) {
      setFileSizeCheck(true)
      setSourcePreview(null)
      return
    }
  }

  const handleUploadButtonClick = () => {
    if (user && uploadFile) {
      // Generate a file name based on the uploaded file's name
      handleUpload(user, storage, uploadFile)
    }
  }

  return (
    <>
      {user ? (
        <div className="flex flex-col">
          {user.email}
          {/* Test firestore */}
          {/* <button onClick={addUserData}>
            this button will add test data to db
          </button>
          <button onClick={readUserData}>read the data from firestore </button>
          <div>{data ? data : null}</div> */}
          {/* testing firebase storage */}
          <input
            onChange={handleChange}
            className="text-sm"
            type="file"
            accept="video/*"
          />
          {fileSizeCheck ? (
            <div>File is too large, stick to {acceptedSize} or lower</div>
          ) : null}
          {sourcePreview ? (
            <>
              <video
                controls
                className="w-[375px] h-[250px]"
                src={sourcePreview}
              ></video>
              <button onClick={handleUploadButtonClick}>
                You want to upload this?
              </button>
            </>
          ) : null}
        </div>
      ) : (
        <div>wrong way go back</div>
      )}
    </>
  )
}

export default TestUserFirebase
