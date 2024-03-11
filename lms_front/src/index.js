import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider}from'react-redux'
import { store } from './Redux/store';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <BrowserRouter>
    <Provider store={store}>
    <App />
   </Provider>
  </BrowserRouter>
  </ChakraProvider>

 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// {
//   "course": "React.js Essentials",
//   "price": 29.99,
//   "level": "Intermediate",
//   "duration": "6 weeks",
//   "instructor": "Rachel Rodriguez",
//   "rating": 4.6,
// },
// {
//   "course": "SQL Mastery: Database Design and Querying",
//   "price": 34.99,
//   "level": "Intermediate",
//   "duration": "8 weeks",
//   "instructor": "David Martinez",
//   "rating": 4.8,
// },
// {
//   "course": "Data Structures and Algorithms in Python",
//   "price": 39.99,
//   "level": "Advanced",
//   "duration": "10 weeks",
//   "instructor": "Dr. Jennifer White",
//   "rating": 4.9,
// },
// {
//   "course": "Angular: The Complete Guide",
//   "price": 37.99,
//   "level": "Advanced",
//   "duration": "12 weeks",
//   "instructor": "Brian Thompson",
//   "rating": 4.7,
// },
// {
//   "course": "Machine Learning with Python",
//   "price": 49.99,
//   "level": "Advanced",
//   "duration": "10 weeks",
//   "instructor": "Dr. Kevin Johnson",
//   "rating": 4.9,
// },
// {
//   "course": "iOS App Development: From Scratch to Store",
//   "price": 44.99,
//   "level": "Advanced",
//   "duration": "12 weeks",
//   "instructor": "Emma Lewis",
//   "rating": 4.8,
// },
// {
//   "course": "Advanced Java Programming: Design Patterns",
//   "price": 36.99,
//   "level": "Advanced",
//   "duration": "8 weeks",
//   "instructor": "Daniel Brown",
//   "rating": 4.6,
// },
// {
//   "course": "Node.js: Building Scalable Applications",
//   "price": 32.99,
//   "level": "Intermediate",
//   "duration": "8 weeks",
//   "instructor": "Alex Turner",
//   "rating": 4.7,
// },
// {
//   "course": "Full Stack Web Development Bootcamp",
//   "price": 49.99,
//   "level": "Advanced",
//   "duration": "12 weeks",
//   "instructor": "Sarah Adams",
//   "rating": 4.8,
// },
// {
//   "course": "Python for Data Science and Machine Learning",
//   "price": 44.99,
//   "level": "Intermediate",
//   "duration": "10 weeks",
//   "instructor": "Dr. Michael Clark",
//   "rating": 4.7,
// },
// {
//   "course": "Python Programming Masterclass",
//   "price": 29.99,
//   "level": "Intermediate",
//   "duration": "8 weeks",
//   "instructor": "Dr. John Smith",
//   "rating": 4.7,
// },
// {
//   "course": "Java Fundamentals: The Core Concepts",
//   "price": 24.99,
//   "level": "Beginner",
//   "duration": "6 weeks",
//   "instructor": "Prof. Emily Johnson",
//   "rating": 4.5,
// },
// {
//   "course": "JavaScript Basics: From Novice to Ninja",
//   "price": 34.99,
//   "level": "Intermediate",
//   "duration": "10 weeks",
//   "instructor": "Jason Lee",
//   "rating": 4.9,
// },
// {
//   "course": "C++ Programming for Beginners",
//   "price": 27.99,
//   "level": "Beginner",
//   "duration": "8 weeks",
//   "instructor": "Dr. Amanda Brown",
//   "rating": 4.6,
// },
// {
//   "course": "Ruby on Rails: The Complete Guide",
//   "price": 39.99,
//   "level": "Advanced",
//   "duration": "12 weeks",
//   "instructor": "Alex Turner",
//   "rating": 4.8,
// },
// {
//   "course": "HTML & CSS Crash Course",
//   "price": 20.0,
//   "level": "Beginner",
//   "duration": "4 weeks",
//   "instructor": "Sarah Adams",
//   "rating": 4.3,
// },
// {
//   "course": "Swift Programming: From Zero to Hero",
//   "price": 29.99,
//   "level": "Intermediate",
//   "duration": "8 weeks",
//   "instructor": "Dr. Michael Clark",
//   "rating": 4.7,
// },
// {
//   "course": "PHP Development Bootcamp",
//   "price": 22.99,
//   "level": "Intermediate",
//   "duration": "6 weeks",
//   "instructor": "Mark Thompson",
//   "rating": 4.4,
// },