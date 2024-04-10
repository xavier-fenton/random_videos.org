import { useFireBaseAuth } from '@component/lib/_providers/FireBaseAuthProvider'
import { useParams } from 'next/navigation'
import {
  getStorage,
  ref,
  getDownloadURL,
  list,
  StorageReference,
} from 'firebase/storage'
import React, { useEffect, useState } from 'react'

const UserVideoColumn = () => {
  const { user } = useFireBaseAuth()
  const [rootPath, setRootPath] = useState<string | undefined>(undefined)
  const [sourceUrls, setSourceUrls] = useState<StorageReference[] | any>()

  const params = useParams<{ username: string }>()

  useEffect(() => {
    if (params && params.username) {
      setRootPath(params.username)
    } else return
  }, [params])

  useEffect(() => {
    if (rootPath !== undefined) {
      retrieveList()
    }
  }, [rootPath])

  async function retrieveList() {
    try {
      if (rootPath !== undefined) {
        const storage = getStorage()
        const pathReference = ref(storage, `${rootPath}/videos/`)
        const listOfVideos = await list(pathReference)
        setSourceUrls(listOfVideos.items)
        const urlsPromises = listOfVideos.items.map(async (item) => {
          const downloadUrl = await getDownloadURL(item)
          return downloadUrl
        })

        const downloadUrls = await Promise.all(urlsPromises)
        setSourceUrls(downloadUrls)
      } else setSourceUrls([])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {user?.email === params?.username ? (
        <div className="flex flex-col gap-5 border border-x-0 w-full h-[100dvh] p-5 items-center">
          <div className="text-xs bg-[#dedede] w-fit p-[2px] px-4 rounded-2xl text-[#424040]">
            all your random_videos that are out there:
          </div>
          {sourceUrls ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sourceUrls.map((urls: string, index: number) => {
                return <video key={index} src={urls} />
              })}
            </div>
          ) : (
            <div className="loader">loading...</div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-3 border w-full md:border-r-black h-[100dvh] p-5">
          <div className="loader">Loading</div>
        </div>
      )}
    </>
  )
}

export default UserVideoColumn
