import { useState,useEffect } from "react"
import Articles from "./articles"
import { useContext } from 'react';
import { AuthContext } from '../UserContext';
import Nav from "./Nav";
import Footer from "./Footer";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useTranslation } from 'react-i18next'; 
import Modal from "./NotaUser";
function Sports() {
    const { t, i18n } = useTranslation();
        const [follow,setFollow]=useState('')
        const [source,setSource]=useState('')
        const [rss,setRss]=useState('')
        const { user } = useContext(AuthContext);
        const [allfollow,setAllfollow]=useState([])
        const [isOpen, setIsOpen] = useState(false);

        function handleOpenModal() {
          setIsOpen(true);
        }
      
        function handleCloseModal() {
          setIsOpen(false);
        }
      

        useEffect( () => {
          if(user){
            axios.get('http://localhost:8081/follow?username='+user.data.username).
            then(data=>setAllfollow(data.data))}
      }, [user])
      function unfollowsource(source){
        axios.delete('http://localhost:8081/follow?follow='+source+'&username='+user.data.username)
              .then(data=>setAllfollow(data.data))}
        function followsource(source)
        {if(user){
        console.log('====================================');
        console.log(source,"floooow is by ",user.data.username,'rss is');
        console.log('====================================');
        axios.post('http://localhost:8081/follow', {
               username: user.data.username,
               follow: [source]
             })
             .then(function (response) {
                setAllfollow(response.data)             })
             .catch(function (error) {
               console.log(error);
             });}else{
                handleOpenModal()                
                }
        }

        return (<div>
<Nav/>
<h1 className="text-center font-bold text-3xl mt-[150px] text-blue-800 p-2 ">{t("Sports")}</h1>


                <div className=" flex flex-wrap ml-[60px]">
             
                    
             
              <div className="border-2 border-red-700 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="espn.png" className='w-[100px] m-2 '></img>
             {allfollow.some(item => item.follow.includes('espn'))? 
            <button onClick={()=>unfollowsource("espn")}
 className=" bg-red-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("espn")} className=" bg-red-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"espn"}
                 
                     />
              </div>
              <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="font-bold text-2xl text-blue-500 mb-6">you can't follow</h2>
        <p className="text-xl">Please log in to access this feature if you havn't an acount Signin first.</p>
      </Modal>
              <div className="border-2 border-blue-700 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="reader.png" className='w-[80px] m-1 '></img>
             {allfollow.some(item => item.follow.includes('bleacher'))? 
            <button onClick={()=>unfollowsource("bleacher")}
 className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("bleacher")} className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"bleacher"}
                 
                     />
              </div>
      
              <div className="border-2 border-blue-700 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="cbss.png" className='w-[100px] m-1 '></img>
             {allfollow.some(item => item.follow.includes('cbss'))? 
            <button onClick={()=>unfollowsource("cbss")}
 className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("cbss")} className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"cbss"}
                 
                     />
              </div>

              <div className="border-2 border-blue-700 w-[500px] m-3 h-fit">
                     <div className="flex justify-between">
             <img src="yahoo.jpg" className='w-[160px] m-5 '></img>
             {allfollow.some(item => item.follow.includes('yahoo'))? 
            <button onClick={()=>unfollowsource("yahoo")}
 className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("unfollow")}</button> :    
<button onClick={()=>followsource("yahoo")} className=" bg-blue-700 font-bold text-xl text-white h-[50px] m-2 p-1 rounded hover:text-yellow-300">{t("follow")}</button> 
             }
                     </div>
                     <Articles source={"yahoo"}
                 
                     />
              </div>
                  </div>
                  <Footer/>
                  </div>
              )
             }


export default Sports