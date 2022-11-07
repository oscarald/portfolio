import React, { useState } from 'react'

function Navbar() {
    let links = [
        {name:"Home", link:"#"},
        {name:"Acerca de mí", link:"#"},
        {name:"Habilidades", link:"#"},
        {name:"Servicios", link:"#"},
        {name:"Portafolio", link:"#"},
        {name:"Contacto", link:"#"},
    ]
    const [open, setOpen] = useState(true)
  return (
    <>
    <div className='container mx-auto md:flex justify-between bg-slate-300 items-center '>
        <div className='p-3'>Logo</div>
        <nav>
            <div className='absolute right-8 top-6 cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
                <ion-icon size="large" name={ open ? "close":"menu"}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-slate-300 md:z-auto z-[-1] left-10 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                            ${open ? 'top-20 ':'top-[-490px]'}  `}>
                {
                    links.map(link =>(
                        <li key={link.name} className="md:ml-8  md:my-0 my-7 ">
                            <a 
                            href={link.link}
                            className="pr-2 text-gray-700  hover:text-indigo-700 duration-500">
                                {link.name}
                            </a>
                        </li>
                    ))
                }
            
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar