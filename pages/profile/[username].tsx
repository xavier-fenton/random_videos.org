// pages/[username].js
import '../../src/app/globals.css'
import { VideoPlayerProvider } from '@component/lib/_context/videoContext'
import { UserProfile } from '../../src/app/_components/userprofile'
import AuthLayout from '../../layouts/AuthLayout'

const UserPage = () => {
  return (
    <>
      <AuthLayout>
        <VideoPlayerProvider>
          <UserProfile />
        </VideoPlayerProvider>
      </AuthLayout>
    </>
  )
}

export default UserPage
