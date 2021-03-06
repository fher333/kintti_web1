import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
//import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input';

export default function SigninScreen(props) {
    //const [value, setValue] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        // TODO: sign in action
        dispatch(signin(email, password));
    };
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Sign In
          </button>
                </div>
                <div>
                    <label />
                    <div>
                        New fan? <Link to={`/register?redirect=${redirect}`}>Create your fan account</Link>
                    </div>

                </div>
                
                

                

                
            </form>

        </div>
    );
}

/* <div>
                    <PhoneInput
                        placeholder="Enter phone number"
                        countrySelectProps={{ unicodeFlags: false }}//false muestra la bandera , true muestra el codigo del pais
                        value={value}
                        onChange={setValue}
                        error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'} />
Is possible: {value && isPossiblePhoneNumber(value) ? 'true' : 'false'}
Is valid: {value && isValidPhoneNumber(value) ? 'true' : 'false'}
National: {value && formatPhoneNumber(value)}
International: {value && formatPhoneNumberIntl(value)}
                </div> */