import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
    const id = useSelector((state) => state.login.id)
    const email = useSelector((state) => state.login.email)
    const username = useSelector((state) => state.login.username)
    const firstName = useSelector((state) => state.login.firstName)
    const lastName = useSelector((state) => state.login.lastName)
    const gender = useSelector((state) => state.login.gender)
    const image = useSelector((state) => state.login.image)

    return (
        <>
            <div className="myProfile">
                <h1>User Information</h1>
                <hr />
                <p>
                    <b>ID:</b>
                    {id}
                </p>
                <p>
                    <b>UserName:</b>
                    {username}
                </p>
                <p>
                    <b>FirstName:</b>
                    {firstName}
                </p>
                <p>
                    <b>LastName:</b>
                    {lastName}
                </p>
                <p>
                    <b>Gender:</b>
                    {gender}
                </p>
                <p>
                    <b>Email:</b>
                    {email}
                </p>
                <b>
                    Image:
                    <img src={image} alt="" />
                </b>
            </div>
        </>
    )
}

export default Profile
