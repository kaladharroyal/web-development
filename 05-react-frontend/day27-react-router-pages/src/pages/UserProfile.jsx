
import React, { useEffect, useState } from 'react' ;
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/${userId}')
        .then(res => res.json())
        .then(data => setUser(data));
    },[userId]);
    if (!user) return <div>Loading...</div>;
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserProfile
