import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled , Button} from '@mui/material';

const InputField = styled(TextField)`
    padding: 15px;
    width: 385px;
`

const Btn = styled(Button)`
    margin: 20px;
    background-color: cyan;
    border: none;
    color: white
`

function Login(){
    const [toggle, setToggle] = useState(false);

    const changeLoginToSignUp = () =>{
        setToggle(true);
        console.log(toggle);
    }

    const changeSignUpToLogin = () =>{
        setToggle(false);
        console.log(toggle);
    }

    return (
        <>
        {toggle===false?
            <div className='flex flex-col justify-center items-center mt-20'>
                <div className='border shadow-md rounded-md border-gray-300 flex flex-col justify-between items-center w-96 h-[30rem] p-10'>
                    <img src='' alt='logo'/>
                    <InputField label="Username" variant="filled" />
                    <InputField label="Password" variant="filled" />
                    <Btn variant="outlined">Log In</Btn>
                    <h1 className='text-gray-600 text-sm'>OR</h1>
                    <p className='text-xs '>Don't have an account?</p>
                    <Button onClick={changeLoginToSignUp}>Click to Register</Button>
                </div>
            </div>
            :
            <div className='flex flex-col justify-center items-center mt-20'>
            <div className='border shadow-md rounded-md border-gray-300 flex flex-col justify-between items-center w-96 h-[30rem] p-10'>
                <img src='' alt='logo'/>
                <InputField label="Email" variant="filled" />
                <InputField label="Username" variant="filled" />
                <InputField label="Password" variant="filled" />
                <Btn variant="outlined">Sign Up</Btn>
                <h1 className='text-gray-600 text-sm'>OR</h1>
                <p className='text-xs '>Already have an account?</p>
                <Button onClick={changeSignUpToLogin}>Click to Login</Button>
            </div>
            </div>
        }
    </>
    )
}

export default Login;