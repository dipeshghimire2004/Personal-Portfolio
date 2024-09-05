import React, { useEffect, useState } from 'react'


function Github() {
  const [data,setData]=useState(null);

  // const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/dipeshghimire2004')
    .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
        <div id="github" className='text-center m-4 p-10 bg-gray'>
      <h1 className='font-bold text-3xl underline drop-shadow-2xl'>Github</h1>
      
      {data ? (
        <div className='flex flex-col items-start bg-transparent border border-stone-50/30 rounded-xl p-4 focus:outline-none   content-center'>
          <p><strong>Username:</strong> {data.login}</p>
          <p><strong>Profile:</strong> <a href={data.html_url} target="_blank" rel="noopener noreferrer">{data.html_url}</a></p>
          <img className='m-9 rounded-2xl' src={data.avatar_url} alt={data.login} width={100} height={100}/>
          <p>Github Followers: {data.followers}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  )
}

export default Github



