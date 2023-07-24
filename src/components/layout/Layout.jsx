import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ThemeChanger from '../themeChanger/ThemeChanger';
import './layout.scss';
import axios from 'axios';
import socketIOClient from "socket.io-client";

const URL = `${process.env.REACT_APP_BACKEND_URL}/v1/api/users/userdetails`;
const URLCOLOR = `${process.env.REACT_APP_BACKEND_URL}/v1/api/theme/changetheme`;

const Layout = ({ children }) => {
  const [changedColor, setChangedColor] = useState({
        primary_color: '',
        _id: '',
  });

  const [themeData, setThemeData] = useState({
    primaryColor: '',
    secondaryColor: '',
    textColor: '',
    fontSize: '',
    fontFamily: '',
  });

  const _id = localStorage.getItem('id');
  // console.log(_id)

  const handleCircleClick = async (color) => {

    setChangedColor((prevColorState) => ({
      ...prevColorState,
      primary_color: color,
      _id: _id,
    }));

    try {
      await axios.patch(URLCOLOR, {
        primary_color: color,
        _id: _id,
      });
    } catch (error) {
      console.error('Error updating color:', error.message);
    }
    await axios.get(URL)
   
    
  };

  useEffect(()=>{
    
    const firstCall=async()=>{
      try {
        const resp=await axios.get(URL)
        const { font, font_size, primary_color, secondary_color, text_color } =resp.data
        setThemeData((prev) => ({
          ...prev,
          primaryColor: primary_color,
          secondaryColor: secondary_color,
          textColor: text_color,
          fontSize: font_size,
          fontFamily: font,
        })); 

      } catch (error) {
        console.log(error)
      }
    }
    firstCall()
  },[])

  useEffect(() => {
    const getTheme = async () => {
      try {
       
        const socket = socketIOClient(process.env.REACT_APP_BACKEND_URL)
        socket.on("message", (data) => {
        const { font, font_size, primary_color, secondary_color, text_color } =data
        setThemeData((prev) => ({
          ...prev,
          primaryColor: primary_color,
          secondaryColor: secondary_color,
          textColor: text_color,
          fontSize: font_size,
          fontFamily: font,
        })); 
      });

       
      } catch (error) {
        console.error('Error fetching theme data:', error.message);
      }
    };
    getTheme();
  }, [themeData]);
 

  return (
    <>
      <Header themeData={themeData} />
      <div style={{ minHeight: '80vh' }} className="--pad">
        {children}
      </div>
      <div className='circle__container'>
        <ThemeChanger color='orange' onCircleClick={handleCircleClick} />
        <ThemeChanger color='blue' onCircleClick={handleCircleClick} />
        <ThemeChanger color='green' onCircleClick={handleCircleClick} />
      </div>
      <Footer themeData={themeData}/>
    </>
  );
};

export default Layout;
