import React from 'react'

export function VideoPlayer() {
  return (
    <div className="flex flex-col gap-4 w-full px-4 ">
      <div className="text-center pt-4 underline">
        213123_00 Title Example 1
      </div>

      <div className="flex items-center justify-center w-full h-fit">
      <video autoPlay controls><source src="/2024-02-26 18-07-03.mp4" type="video/mp4" /></video>
      </div>
      <div className="text-center underline">
        213123_00 Title Example 1 DESCRIPTION HERE
      </div>
    </div>
  )
}
