import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import userService from '../services/users'

const User = () => {
    const [user, setUser] = useState()
    const { id } = useParams()

    const fetchUserData = async (id) => {
        const response = await userService.getUserById(id)
        setUser(response.data)
    }

    useEffect(() => {
        fetchUserData(id)
    }, [id])

    return (
        <>
            <section>
                <Link to="/"><ArrowBackIcon fontSize="inherit" />Back Home
                </Link>
                {user && <div class="flexbox-container">
                    <div class="flexbox-item">
                        <p>- name: {user.name}</p>
                        <p>- username: {user.username}</p>
                        <p>- email: {user.email}</p>
                        <p>- phone: {user.phone}</p>
                        <p>- company: {user.company.name}</p>
                        <p>- website: {user.website}</p>
                        <p>- address: </p>
                        <li>street: {user.address.street}</li>
                        <li>suite: {user.address.suite}</li>
                        <li>city: {user.address.city}</li>
                        <li>zipcode: {user.address.zipcode}</li>
                    </div>
                </div>}

            </section>
        </>
    )
}

export default User
