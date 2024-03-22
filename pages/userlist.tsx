// Example of linking to a user page
import '../src/app/globals.css'
import '../src/app/globals.css'


import Link from 'next/link';
import { TestUsers as users } from '@component/app/testUsers';
const UserList = () => (
  
  <ul >
    {users.map((user) => (
      <li key={user.id}>
        <Link href={`/user/${user.username}`}>
          <div className='pl-5'>{user.username}</div>
          
        </Link>
      </li>
    ))}
  </ul>
);

export default UserList;