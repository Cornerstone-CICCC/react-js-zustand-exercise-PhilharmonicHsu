import { useRef, useState, type ChangeEvent } from 'react'

import './App.css'
import type { User } from './types/user'
import { v4 as uuid } from 'uuid'
import { useUsersStore } from './stores/user.store'


const Hobbies = [
  {
    key: 'listenMusic',
    value: 'Listen Music'
  },
  {
    key: 'sport',
    value: 'Sport'
  },
  {
    key: 'netflix',
    value: 'Netflix'
  },
]

const initialUser = {
    id: uuid(),
    firstname: '',
    lastname: '',
    age: 0,
    hobbies: []
}

function App() {
  const [user, setUser] = useState<User>(initialUser)

  const {users, addUser, deleteUser} = useUsersStore((state) => state)

  const dialogRef = useRef<HTMLDialogElement>(null)

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser(prevState => ({
          ...prevState,
          [name]: value
        }))
    }    

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target
    
        setUser(prevState => {
          const updatedHobbies = checked
          ? [...prevState.hobbies, value]
          : prevState.hobbies.filter(hobby => hobby !== value)
    
          return {
            ...prevState,
            hobbies: updatedHobbies
          }
        })
    }

  const handleAddUser = () => {
    addUser(user)
    setUser(initialUser)
    dialogRef.current?.close()
  }

  const handleDeleteUser = (userId: string) => {
    deleteUser(userId)
  }

  return (
    <>
      <button onClick={() => dialogRef.current!.show()}>Add</button>

      <ul>
        {users.map(user => (
          <li>
            <div>
              {user.firstname}
              <button onClick={() => handleDeleteUser(user.id)}>delete</button>
            </div>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input 
              type="text" 
              id="firstname" 
              name="firstname" 
              value={user.firstname} 
              onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input 
              type="text" 
              id="lastname" 
              name="lastname" 
              value={user.lastname} 
              onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input 
              type="number" 
              id="age" 
              name="age" 
              min="0"
              value={user.age} 
              onChange={handleChange} 
          />
        </div>
        <div>
          <label>Hobbies:</label>
          {
              Hobbies.map((hobby, index) => <div key={index}>
                  <input 
                      type="checkbox" 
                      id={hobby.key} 
                      name="hobbies" 
                      value={hobby.value} 
                      checked={user.hobbies.includes(hobby.value)}
                      onChange={handleCheckboxChange}
                  />
                  <label htmlFor={hobby.key} >{hobby.value}</label>
                </div>
              )
          }
          </div>
          <button onClick={handleAddUser}>
            Submit
          </button>
      </dialog>
      
    </>
  )
}

export default App
