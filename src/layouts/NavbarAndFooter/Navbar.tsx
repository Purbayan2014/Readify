import { Link, NavLink, useHistory } from "react-router-dom";
import { SpinnerLoading } from "../../components/utils/spinnerLoading";
import { auth, db, logout } from "../../components/Auth/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { query, collection, where, getDocs } from "firebase/firestore";

export const Navbar = () => {
  
  const navigate = useHistory();
  // const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const fetchUserName = async () => {
  //   try {
  //     if (user) {
  //       const q = query(collection(db, "users"), where("uid", "==", user.uid));
  //       const doc = await getDocs(q);
  //       const data = doc.docs[0].data();
  //       setName(data.name);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      <SpinnerLoading/>
      return;
    }
    if (!user) navigate.push("/register");
    // fetchUserName();
  }, [user, loading, navigate]);


  const handleLogout = async () => {
    try {
      logout();
      navigate.push("/login");
    } catch (err) {
      console.error(err);
      alert("An error occurred while logging out");
    }
  };


  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>Readify</span>
        <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/home'> Home </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/search'> Search Books</NavLink>
            </li>

          </ul>
          <ul className='navbar-nav ms-auto'>
            <li className="nav-item">
              <NavLink className='nav-link' to='/register'> Register </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/reset'> Reset Credentials </NavLink>
            </li>
            {!user ?
              <li className='nav-item m-1'>
                <Link type='button' className='btn btn-outline-light' to='/login'> Sign in </Link>
              </li>
              :
              <li>
                <button className='btn btn-outline-light' onClick={handleLogout}> Logout </button>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

