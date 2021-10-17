import React, { Component } from 'react';
import '../../assets/style.css';
import  log  from '../../assets/images/log.png';
import logo from '../../assets/images/temp_logo.png';
import {Link} from 'react-router-dom';
import "react-tiger-transition/styles/main.min.css";


class  Login extends Component{

    render(){

        return(
            
                
           <div className=" overflow-hidden shadow-none md:flex lg:w-3/4 lg:shadow-md mt-14 main  ">
               <div className="  h-full w-full md:w-1/2  bg-white-100 ">

               <div className =" -mt-40  ml-32 absolute flex  lg:mt-2  lg:-ml-0" >
                       <img src={logo} alt="eazelogo"  className="mt-2 ml-2 "/>
                       <p className="mt-6 font-bold text-xl">EAZ</p>
              </div>

           <div className="flex float-right mr-52">         
                         <div className="invisible md:visible absolute flex space-x-8 mt-7 ">
                            <Link to="/"> 
                            <li className="font-semibold text-md text-black list-none  hover:text-yellow-500  ">Register </li>
                            </Link>
                            <Link to="/login"> 
                            <li className="font-semibold text-md list-none  text-black hover:text-yellow-500   "> Login</li>
                            </Link>
                         </div>

          </div>

        <div className=" mt-32 space-y-6  md:mt-48 ml-14 space-y-5">
            <input className="w-full -ml-6  lg:ml-1 md:w-4/5  h-10  px-3 mb-2 text-base text-gray-700 border-black  placeholder-gray-600 border rounded focus:outline-none   " type="email" placeholder="Email"/>
            <input className="w-full  -ml-6  lg:ml-1  md:w-4/5  h-10  px-3 mb-2 text-base text-gray-700 border-black  placeholder-gray-600 border rounded focus:outline-none   " type="password" placeholder="Password"/>
            </div>
            <button className="shadow   outline  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-8 ml-14" type="button">
            Login
          </button>

          <div className="visible mt-4 lg:invisible">
         <Link to="/" className="text-center ">
            <p>Want to be a member?Sign Up</p>
         </Link>
         </div>
       
         </div>
    
          <div className="invisible md:visible h-full w-1/2 color ">

         <img src={log} alt="foward" className=" w-4/5  ml-6 mt-14"/>
         </div>
           </div>
        );
    }
}


export default Login;