// import {React, useEffect, useRef} from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import {BiMenu} from 'react-icons/bi';

// const navLinks = [
//   {
//     path: '/home',
//     display: 'Home'
//   },
//   {
//     path: '/nearbydoctors',
//     display: 'Find a Doctor'
//   },
//   {
//     path: '/form',
//     display: 'Form'
//   },
//   {
//     path: '/email',
//     display: 'Email'
//   },
// ]

// const Header = () => {
//   const heaferRef = useRef(null);
//   const menuRef = useRef(null);

//   const handleStickyHeader = () => {
//     window.addEventListener('scroll', () => {
//       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         heaferRef.current.classList.add('sticky_header')
//       }
//       else {
//         heaferRef.current.classList.remove('sticky_header')
//       }
//     })
//   }

//   useEffect(() => {
//     handleStickyHeader();

//     return () => window.removeEventListener('scroll', handleStickyHeader)
//   })

//   const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

//   return (
//     <header className='header flex items-center' ref={heaferRef} 
//     // style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', position:"sticky", top:"0px"}}
//     style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'}}
//     >
//       <div className="container">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div>
//             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRig-K3NJgt4Dbe4NYQWQx1XjfjzrnLnEPhV0fQTGUBIaKh4kTmalisU_YtnCC_9brFFlY&usqp=CAU' alt='logo' width='70px' height='70px'/>
//           </div>
//           <div> 
//             <h1> <b> Cardio Care </b> </h1>            
//           </div>

//           {/* Menu */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <ul className="menu flex items-center gap-[2.7rem]">
//               {
//                 navLinks.map((link, index) => 
//                   <li key={index}>
//                     <NavLink 
//                       to={link.path} 
//                       className={navClass => 
//                         navClass.isActive 
//                           ? 'text-primaryColor text-[16px] leading-7 font-[600]' 
//                           : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'} exact>{link.display}</NavLink>
//                   </li>)
//               }
//             </ul>
//           </div>

//           <Link to='/login'>
//             <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
//           </Link>

//           <span className='md:hidden' onClick={toggleMenu}>
//             <BiMenu className='w-6 h-6 cursor-pointer' />
//           </span>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header



import {React, useEffect, useRef, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';
import axios from "axios";

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/nearbydoctors',
    display: 'Find a Doctor'
  },
  {
    path: '/form',
    display: 'Form'
  },
  {
    path: '/email',
    display: 'Email'
  },
]

const Header = () => {
  const heaferRef = useRef(null);
  const menuRef = useRef(null);

    // const [authURL, setAuthURL] = useState('');
    // const Login = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:8000/nylas/generate-auth-url');
    //         const authURLFromNylas = response.data;

    //         setAuthURL(authURLFromNylas);

    //         window.location.href = authURLFromNylas;
    //     } catch (error) {
    //         console.error('Error fetching auth URL:', error);
    //     }
    // }


  // const handleStickyHeader = () => {
  //   window.addEventListener('scroll', () => {
  //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //       heaferRef.current.classList.add('sticky_header')
  //     }
  //     else {
  //       heaferRef.current.classList.remove('sticky_header')
  //     }
  //   })
  // }

  // useEffect(() => {
  //   handleStickyHeader();

  //   return () => window.removeEventListener('scroll', handleStickyHeader)
  // })

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

    
  return (
    <header className='header flex items-center' ref={heaferRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRig-K3NJgt4Dbe4NYQWQx1XjfjzrnLnEPhV0fQTGUBIaKh4kTmalisU_YtnCC_9brFFlY&usqp=CAU' alt='logo' width='70px' height='70px'/>
          </div>
          <div> 
            <h1> <b> Cardio Care </b> </h1>            
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) => 
                  <li key={index}>
                    <NavLink 
                      to={link.path} 
                      className={navClass => 
                        navClass.isActive 
                          ? 'text-primaryColor text-[16px] leading-7 font-[600]' 
                          : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'} exact>{link.display}</NavLink>
                  </li>)
              }
            </ul>
          </div>

          {/* <Link to='/login'> */}
            {/* <button onClick={Login} >Login here</button> */}
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]' >Logout</button>
          {/* </Link> */}

          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header