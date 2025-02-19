import React from 'react'
import userData from '../../../assets/Data/UserData';
import Sections from './Sections';

function UserBar({name, username, views, posts, languages, skills, rank}){
    return(
        <div className='bg-blue-600 h-[620px] rounded-lg flex flex-col p-5'>
            <div className='flex'>
                <img className='h-20 w-20 mb-5 mr-5' src='https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1739656910~exp=1739660510~hmac=790273d7e7f38a15bbeab3f367120235806f6ed760c1e404d634c684de9c55dc&w=740'/>
                <div className='flex flex-col'>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                    <h1>{rank}</h1>
                </div>
            </div>
            <Sections />
        </div>
    )
}

export default UserBar;