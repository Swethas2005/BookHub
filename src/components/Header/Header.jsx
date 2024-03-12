import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Welcome to BookHub</h2>
                <p className='header-text fs-18 fw-3'>Get ready to dive into a world of excitement, mystery, and wonder. Join us as we embark on thrilling literary journeys that will ignite your imagination and fuel your passion for reading.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header;
