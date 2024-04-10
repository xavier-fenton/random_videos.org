import { FirebaseStorage, ref, uploadBytes } from "firebase/storage"
import { File } from "buffer"
import firebase from 'firebase/compat/app'



export function handleUpload(user: firebase.User, storage: FirebaseStorage, uploadFile: File){
  if (user) {
    
    const userFolderRef = ref(storage, `${user.email}/videos`)
    const file: File | ArrayBuffer | any = uploadFile
    const timestamp = new Date().getTime();
    console.log(timestamp);
    
    const fullPath = `${user.email}/videos/${timestamp}_${file.name}`

    if (file !== undefined) {
      uploadBytes(ref(storage, fullPath), file)
        .then((snapshot: any) => {
          console.log('Uploaded a blob or file!', snapshot)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}