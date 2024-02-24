// Causa vs Efeito
import { useEffect, useState } from "react"

interface User {
  name: string;
  githubProfileUrl: string;
}

function fetchUserData() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        githubProfileUrl: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfile() {
  const [hasRenderUserName, setHasRenderUserName] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function loadUserData() {
      setHasRenderUserName(true)

      const fetchUserResponse = fetchUserData()

      setUserData(fetchUserResponse.data.user)
      
      setHasRenderUserName(false)
    }

    loadUserData()
  })

  if (hasRenderUserName) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.githubProfileUrl}.png`} alt="" />
      <a href={userData?.githubProfileUrl}>{userData?.name}</a>
    </div>
  )
}


