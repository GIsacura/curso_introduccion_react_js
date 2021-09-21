import React from "react";
import './TodosLoading.css'

function TodosLoading(){
    return(
        <article className="container">
            <div className="background">
                <div className="left">
                <div className="image"></div>
                <div className="mask thick"></div>
                </div>
                <div className="right">
                <div className="bar"></div>
                <div className="mask thick"></div>
                <div className="bar"></div>
                <div className="mask thin"></div>
                <div className="bar medium"></div>
                <div className="mask thick"></div>
                <div className="bar small"></div>
                </div>
            </div>
            </article>
    )
}

export {TodosLoading}