import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Auth/firebase";
import { Link } from "react-router-dom";

export const LibraryServices = () => {

    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='container my-5'>
            <div className='row p-4 align-items-center border shadow-lg'>
                <div className='col-lg-7 p-3'>
                    <h1 className='display-4 fw-bold'>
                        Can't find what you are looking for?
                    </h1>
                    <p className='lead'>
                        If you cannot find what you are looking for,
                        send our library admin's a personal message!
                    </p>
                    <div className='d-grid gap-2 justify-content-md-start mb-4 mb-lg-3'>
                        {user ? 
                                <Link type="button" className="btn main-color btn-lg text-white"
                                    to='/search'>
                                        Explore Library Services
                                </Link>
                            :
                                <Link className='btn main-color btn-lg text-white' to='/login'>Sign In</Link>
                        }
                    </div>
                </div>
                {/* image col div */}
                <div className='col-lg-4 offset-lg-1 shadow-lg lost-image'></div>
            </div>
        </div>
    );
}