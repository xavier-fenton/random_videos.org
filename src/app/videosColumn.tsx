import React from 'react'

export function VideoColumn() {
  return (
    <div className="flex flex-col gap-3 border w-full md:w-[50%] md:border-r-black h-[100dvh] p-5">
      <div className='text-center'>random_videos</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex border w-full h-[175px] bg-[#d8cbcb] text-center justify-center items-center">
          <div>Video</div>
        </div>
        <div className="flex border w-full h-[175px] bg-[#d8cbcb] text-center justify-center items-center">
          <div>Video</div>
        </div><div className="flex border w-full h-[175px] bg-[#d8cbcb] text-center justify-center items-center">
          <div>Video</div>
        </div><div className="flex border w-full h-[175px] bg-[#d8cbcb] text-center justify-center items-center">
          <div>Video</div>
        </div><div className="flex border w-full h-[175px] bg-[#d8cbcb] text-center justify-center items-center">
          <div>Video</div>
        </div>
      </div>
    </div>
  )
}
