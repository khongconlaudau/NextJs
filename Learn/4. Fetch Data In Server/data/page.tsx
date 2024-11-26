import React from 'react'

const Data : React.FC = async () => {
    const res = await fetch("https://api.vercel.app/blog");
    const data = await res.json();

  return (
    <ul>
        {data.map((p : any) =>(
            <li key={p.id} className='border'>{p.title}</li>
        ))}
    </ul>
  )
}

export default Data