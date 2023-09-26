import React from 'react'
import './nav.css'
import logo from './i.png'
import { Clock } from '../clock/clock'
import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Nav = () => {

    let [user, setUser] = useState(false)

    useEffect(() => {
      if (localStorage.getItem('accessToken')){
        setUser(true)
      } else {
        setUser(false)
      }
    
    //   return () => {
    //     second
    //   }
    }, [user])

    const clearsession = () => {
        localStorage.removeItem('accessToken')
        setUser(false)
    }
    

    return ( 
        <>
            <header>
                <Link to="/">
                    <img src={logo} alt="instaya" />
                </Link>
                <div className='menu'>

                    <Clock />

                    <nav>
                        {  user? (
                        <ul>
                            <li className='text-nav'>
                                <Link to={'/'} onClick={clearsession}>Cerrar sesión</Link> 
                            </li>
                        </ul>
                        ):(
                        <ul>

                        </ul>
                        )}
                        
                    </nav>
                </div>
            </header>
            <Outlet context={[user, setUser]}/>
        </>
    )
}

export default Nav
