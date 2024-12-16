import React from 'react'


const HeroCard= ({
    title,


})=>
{
  return (
    <div className='w-8/12 h-fit p-6 bg-green-300'>
        {title&&(
            <h2 className='text-gray-800 text-3xl '>
                {title}
            </h2>
            
            


            
        )}
        
      
    </div>
  )
}

export default HeroCard
