// pages/[username].js
import '../../src/app/globals.css'
import { VideoPlayerProvider } from '@component/app/_context/videoContext';
import { UserProfile } from '../../src/app/_components/userprofile';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { TestUsers as user } from '@component/app/testUsers';

const UserPage = () => {
  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    // You can fetch user data or perform other actions based on the username
    console.log('Hello:', username);
  }, [username]);

  return (
    <VideoPlayerProvider>
      {user && user.map((user, index) => {
        if(username === user.username){

          return <UserProfile key={index} user={user}/>
        } 
      })}
      
    </VideoPlayerProvider>
  );
};

export default UserPage;
