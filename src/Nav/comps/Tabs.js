import React from 'react'

const Tab = ({text, italic = '', children}) => {
    return (
        <div className='w-full h-20 grid grid-cols-4 border-b-2 border-b-slate-400 shadow-md'>
            <div className='col-span-1 flex border-r-2 border-r-slate-250'>
                {children}
            </div>
            <div className='col-span-3 flex'>
                <h1 className={`${italic === '' ? "" : 'italic'} text-2xl mx-5 my-auto`}>{text}</h1>
            </div>
        </div>
    )
}

export default Tab