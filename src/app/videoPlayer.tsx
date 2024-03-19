import React from 'react'

export function VideoPlayer() {
  return (
    <div className="flex flex-col gap-4 w-full px-4 ">
      <div className="text-center pt-4 underline">
        213123_00 Title Example 1
      </div>

      <div className="flex items-center justify-center w-full h-[720px] bg-[#ffeaea] text-center">
       video playing here
      </div>
      <div className="text-center underline">
        213123_00 Title Example 1 DESCRIPTION HERE
      </div>
    </div>
  )
}
