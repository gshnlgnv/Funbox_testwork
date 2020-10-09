import React from 'react';
import CatItem from "./CatItem";
import "./styles/App.css";

const names = [
    "фуа-гра",
    "рыбой",
    "курой",
];

const weight = [
    "0,5",
    "2",
    "5",
];

const mouses = [
    "10 порций мышь в подарок",
    "40 порций 2 мыши в подарок",
    "100 порций 5 мышей в подарок заказчик доволен",
];

function App(){
    return(
        <div className="wrapper">
            <main>
                <div className="main__wrapper">
                    <div className="main__title">
                        Ты сегодня покормил кота?
                    </div>
                    <div className="main__cats_types">
                        <CatItem foodType={names[0]} foodWeight={weight[0]} mousesQnty={mouses[0]}/>
                        <CatItem foodType={names[1]} foodWeight={weight[1]} mousesQnty={mouses[1]}/>
                        <CatItem foodType={names[2]} foodWeight={weight[2]} mousesQnty={mouses[2]}/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;