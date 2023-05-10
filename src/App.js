import React from 'react'
import Main from "./components/Main"
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App;