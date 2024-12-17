import React from 'react'


export default function page () {
  return (
    <div className='bg-[#EEEEEE] text-black w-full h-[100vh] flex  justify-center items-center'>
      <div className='bg-[#76ABAE] w-[55vh] h-[50vh] flex justify-center items-center rounded-sm p-0'>
        <div className='bg-[#222831] w-full h-[46vh] flex flex-col justify-start items-center rounded-sm p-3 gap-1'>
            <div className='flex h-[6vh] gap-1 text-[1.3rem] font-robotoMono  '>
                <div className='bg-blue-300 w-[25vh]  flex justify-center items-center rounded-sm'>Login</div>
                <div className='bg-blue-300 w-[25vh]  flex justify-center items-center rounded-sm'>Register</div>
            </div>
            <div className='flex flex-col  gap-1 h-full bg-blue-300 w-full rounded-sm p-3'>
                <div>
                    <span>Username:</span>
                    <input type="text" className='w-full h-[6vh] rounded-sm p-2 ' placeholder='Enter your username or email' />
                </div>
                <div>
                    <span>Password:</span>
                    <input type="text" className='w-full h-[6vh] rounded-sm p-2' placeholder='Enter your password'/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

