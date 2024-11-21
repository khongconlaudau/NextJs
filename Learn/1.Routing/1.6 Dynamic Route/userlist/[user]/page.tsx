import React from 'react'
type UserProps = {
    params: Promise<{
        user: string
    }>
}

async function User({params}:UserProps) {
    const user = (await params).user;
    return <div>
        User: {user}
    </div>
}

export default User;
