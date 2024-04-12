import React, { useState } from 'react'

const NewVideoPlayer = ({ source, visibility }: any) => {
  const [buttonColour, setButtonColour] = useState<string>('bg-green-400')
  const [textColour, setTextColour] = useState<string>('text-green-400')
  const [adjustmentButtonColour, setAdjustmentButtonColour] =
    useState<string>('bg-slate-400')
  const [adjustmentTextColour, setAdjustmentTextColour] =
    useState<string>('text-slate-400')
  const [adjustmentSize, setAdjustmentSize] = useState<string>('px-20')
  const [adjusted, setAdjusted] = useState<boolean>(false)

  const handleClose = () => {
    visibility(false)
  }
  const handleAdjustment = () => {
    if (adjusted) {
      setAdjustmentSize('px-20')
    } else {
      setAdjustmentSize('px-0')
    }
    setAdjusted(!adjusted)
  }

  return (
    <div
      className={`absolute z-10 drop-shadow-2xl top-0 h-[100dvh] ${
        adjusted ? adjustmentSize : 'px-20'
      } transition ease-in-out duration-300  `}
    >
      <div className="bg-gray-200 rounded-lg gap-2 py-2 h-[100%]">
        <div className="flex justify-end gap-2 p-2">
          <button
            className={`${adjustmentButtonColour} ${adjustmentTextColour} rounded-full text-xs px-2 `}
            onClick={handleAdjustment}
            onMouseEnter={() => {
              setAdjustmentButtonColour('bg-slate-300')
              setAdjustmentTextColour('text-slate-300')
            }}
            onMouseLeave={() => {
              setAdjustmentButtonColour('bg-slate-400')
              setAdjustmentTextColour('text-slate-400')
            }}
          >
            x
          </button>
          <button
            className={`${buttonColour} ${textColour} rounded-full text-xs px-2 `}
            onClick={handleClose}
            onMouseEnter={() => {
              setButtonColour('bg-red-600')
              setTextColour('text-red-600')
            }}
            onMouseLeave={() => {
              setButtonColour('bg-green-400')
              setTextColour('text-green-400')
            }}
          >
            x
          </button>
        </div>
        <div className="flex flex-col items-center bg-gray-200 rounded-b-lg">
          <video
            className="h-auto w-[80%] rounded-md shadow-lg"
            controls
            src={source}
          />
          <div>
            <div className="pt-2 px-4">title</div>
            <div className="px-4 pb-4">description</div>
            <div className="px-[20px] pb-[20px]">
              <div className="px-4 w-[75%] rounded-lg border border-black">
                Eu deserunt amet adipisicing occaecat est consequat cillum
                labore in do. Nisi eu ea culpa amet magna non ullamco magna.
                Laboris esse magna culpa sint labore et in eu eu pariatur.
                Ullamco eu cillum pariatur dolor laborum ipsum nulla. Dolor
                laboris amet qui sint quis aliqua ea nostrud ex nulla consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewVideoPlayer
