import { use, useState } from 'react'
import { useFireBaseAuth } from './_providers/FireBaseAuthProvider'

import {storage} from "../firebase/firebase"
import "./globals.css"
import { ref, uploadBytes } from 'firebase/storage'
import { metadata } from './layout'

interface TestUserFirebaseProps {
  addUserData: () => void
  readUserData: () => void
  data: React.ReactNode
}

const TestUserFirebase = ({}: TestUserFirebaseProps) => {
  const [sourcePreview, setSourcePreview] = useState<string | undefined>()
  const [uploadFile, setUploadFile] = useState<File>()
  const { user } = useFireBaseAuth()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      
      setUploadFile(file)

      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result as string; // Convert the result to a string
        setSourcePreview(url);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleUpload = () => {
    if(user){
      const storageRef = ref(storage, uploadFile?.name)

      const file: File | ArrayBuffer | any = uploadFile
      if(file !== undefined){
        
        uploadBytes(storageRef, file).then((snapshot: any) => {
          console.log('Uploaded a blob or file!', snapshot);
        }).catch((err) => {console.log(err);
        });
      }

    }
  }
  return (
    <>
      {user ? (
        <div>
          {/* Test firestore */}
          {/* <button onClick={addUserData}>
            this button will add test data to db
          </button>
          <button onClick={readUserData}>read the data from firestore </button>
          <div>{data ? data : null}</div> */}
          {/* testing firebase storage */}
          <input onChange={handleChange} className="text-sm" type="file" accept="video/*" />

          <video className="w-[375px] h-[250px]" src={sourcePreview}></video>
          {sourcePreview ? <button onClick={handleUpload}>You want to upload this?</button> : null}
          

        </div>
      ) : (
        <div>wrong way go back</div>
      )}
    </>
  )
}

export default TestUserFirebase
