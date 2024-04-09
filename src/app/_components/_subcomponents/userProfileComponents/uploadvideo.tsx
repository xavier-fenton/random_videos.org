import React, { useState } from 'react'
import { useFireBaseAuth } from '../../../../lib/_providers/FireBaseAuthProvider'
import { filesize } from 'filesize'
import { storage } from '@component/firebase/firebase'
import firebase from 'firebase/compat/app'
import { FirebaseStorage, ref, uploadBytes } from 'firebase/storage'

const Uploadvideo = () => {
  const { user } = useFireBaseAuth()
  
  const [sourcePreview, setSourcePreview] = useState<string | undefined | null>()
  const [uploadFile, setUploadFile] = useState<File | any>()
  const [uploadFinished, setUploadFinished] = useState<boolean | null>(false)

  const [fileSizeCheck, setFileSizeCheck] = useState<boolean>(false)
  const acceptedSize = 250 // infuture: admin could change this

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | any = event.target.files?.[0] // Get the first selected file
    const fileSize = filesize(file.size, { base: 10, round: 2 }).split(' ')

    if (Number(fileSize[0]) <= acceptedSize) {
      setUploadFile(file)
      setFileSizeCheck(false)

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

  function handleUpload(
    user: firebase.User,
    storage: FirebaseStorage,
    uploadFile: File
  ) {
    if (user) {
      const file: File | ArrayBuffer | any = uploadFile
      const timestamp = new Date().getTime()
      console.log(timestamp)

      const fullPath = `${user.email}/videos/${timestamp}_${file.name}`

      if (file !== undefined) {
        uploadBytes(ref(storage, fullPath), file)
          .then((snapshot: any) => {
            console.log('Uploaded a blob or file!', snapshot)
            setSourcePreview(null)
            setUploadFinished(true)
            setTimeout(() => {
              setUploadFinished(false)
            }, 2500)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
  const handleUploadButtonClick = () => {
    if (user && uploadFile) {
      // Generate a file name based on the uploaded file's name
      handleUpload(user, storage, uploadFile)
    }
  }

  return (
    <div className="h-[100dvh] w-full p-4 border border-x-0">
      <div className="w-fit flex flex-col gap-4">
        <div>{user?.email}</div>
        <label>Upload a video: </label>
        <input
          onChange={handleChange}
          className="text-sm"
          type="file"
          accept="video/*"
        />
        {fileSizeCheck ? (
          <div>File is too large, stick to {acceptedSize}mb or lower</div>
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
        {uploadFinished ? (
          <div>
            Upload Complete! Your Video should be in your video files now.
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Uploadvideo
