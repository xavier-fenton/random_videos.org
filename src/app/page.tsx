import '../app/globals.css'
import Header from './header'
import { VideoPlayer } from './videoPlayer'
import { VideoColumn } from './videosColumn'
type user = {
  id: number
  username: string
  isUser: boolean
}

export default function Home() {
  const user: user = {
    id: 1,
    username: 'admin_user',
    isUser: true,
  }
  return (
    <>
      <Header />
      {user.isUser === true ? (
        <div className="flex flex-col w-full md:flex-row">
          <VideoColumn />
          <VideoPlayer />
        </div>
      ) : (
        <div className="text-center pt-10">
          <div>Not a user </div>
          <div>Login here</div>
        </div>
      )}
    </>
  )
}
