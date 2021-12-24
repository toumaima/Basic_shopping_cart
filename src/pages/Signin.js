
import LoginButton from '../Components/LoginButton';
import LogoutButton from '../Components/LogoutButton';
import Profile from '../Components/Profile';

import {useAuth0} from '@auth0/auth0-react';


const SignIn =() =>{
const {isLoading} = useAuth0();
if (isLoading) return <div>IsLoading...</div>;

return (
    <>
    <br/><br/>
    <LoginButton/>
    <LogoutButton/>
     <Profile/>
    </>);
}   

export default SignIn;