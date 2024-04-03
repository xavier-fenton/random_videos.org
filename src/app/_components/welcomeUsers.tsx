import React from 'react';
import { user } from '../testUsers';

type Props = {
  user: user
}
const welcomeUsers: React.FC<Props> = ({user}) => {
  return (
    <div className="bg-[#51f0a6] border-red-100 w-fit rounded-2xl text-xs p-2 px-4 sticky bottom-4 ml-4">
            welcome {user.username}!
          </div>
  );
};

export default welcomeUsers;