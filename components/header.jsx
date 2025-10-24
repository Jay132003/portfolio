import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between 
                    mb-12 px-6 sm:px-8 pt-4"> 
      {/* px → left & right padding, pt → top padding */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#CCCCCC] dark:bg-[#616161]"></div>
        <span className="text-[#666666] dark:text-[#C0C0C0] text-[20px] font-medium">
          Developer
        </span>
      </div>

      <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200 mt-4 sm:mt-0">
        ● AVAILABLE FOR WORK
      </div>
    </div>
  )
}
