import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [])

    return (
        <div>Profile</div>
    )
}

export default Profile