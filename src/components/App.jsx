import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

const App = () => {
    return <div>
        <Header />
        <Note title={"testing title"} content={"testing content"}/>
        <Footer />
    </div>
}

export default App;