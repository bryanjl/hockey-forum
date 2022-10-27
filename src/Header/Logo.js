import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (

      <div className='h-full w-full col-span-3 flex'>
        <Link href='/'>
          <h1 className='text-white text-3xl my-auto cursor-pointer'>Hockey Fight Forum</h1>
        </Link>
      </div>

  )
}

export default Logo