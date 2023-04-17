import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Providers/Authproviders';


const Login = () => {

    const { signIN, signInwithgoogle } = useContext(Authcontext)
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIN(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                form.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

            });

    }
    const handelgooglebtn = () => {
        signInwithgoogle()
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold"> Please Login !</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link to='/register' className="btn btn-link"><small>New to auth master.pleacse register</small> </Link>
                </div>
                <div>
                    <button onClick={handelgooglebtn} className="btn btn-primary">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;