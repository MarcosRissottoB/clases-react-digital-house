import { createContext } from 'react'

const UserContext = createContext({
  user: {
    name: 'John',
    lastname: 'Doe',
  }
})

export { UserContext }

