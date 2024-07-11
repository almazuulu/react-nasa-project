import React from 'react'

export default function SideBar(props) {
    const {handleToggleModal} = props

  return (
    <div className='sidebar'>
        <div className='bgOverlay'></div>
        <div className='sidebarContents'>
            <h2>The Brutal Martian Landscape</h2>
            <div>
                <p>Description</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore accusantium quisquam labore cum vero amet blanditiis earum numquam quidem impedit fuga quibusdam corporis veritatis aperiam reiciendis non temporibus, pariatur quos.</p>
            </div>
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
  )
}
