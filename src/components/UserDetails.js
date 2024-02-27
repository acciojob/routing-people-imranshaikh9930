import React from 'react';
import { NavLink,Route } from 'react-router-dom';
import Users from './Users';

function UserDetails({users}) {

    const user = users.find(u => u.id === parseInt(users.id, 10));
  console.log(users)
  return (
    <div>
        
            <ul>
                {users.map((user)=>(
                    <NavLink to={`/users/${user.id}`}>
            
                      
                        <li>{user.name}</li>
                    </NavLink>
                    ))
                }
            </ul>

           

            
              
            
           
    </div>
  )
}

export default UserDetails