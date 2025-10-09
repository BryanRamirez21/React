import { isAction } from '@reduxjs/toolkit'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const profiles = [1,2,3,4,5]

export const ProfilesPage = () => {
    return (
        <div className='d-flex flex-column gap-2'>
            {profiles.map((profile, key) => (
                //<a key={key} href={`/profiles/${profile}`}></a>

                //<Link key={key} to={`/p/${profile}`}>Profile {profile}</Link>

                <NavLink key={key} to={`/p/${profile}`} 
                    className={({isActive}) => {
                        return isActive ? 'text-primary' : ''
                }}>
                    Profile {profile}
                </NavLink>
            ))}
            <Outlet />
        </div>
    )
}
