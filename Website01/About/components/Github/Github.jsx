import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://api.github.com/users/sahilkhanbk')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4'>
      <h1>Github Following: {data.followers}</h1>
      <img src={data.avatar_url} alt="github pic" width={300} />
    </div>
  )
}

export default Github
