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

function App() {
    const catsNumber = 3;

    const listCats = (catsNumber) => {
        let arr = [];

        for (let i = 0; i < catsNumber; i++) {
            arr.push(<CatItem foodType={names[i]} foodWeight={weight[i]} mousesQnty={mouses[i]}/>);
        }
        return arr;
    };

    return (
        <div className="wrapper">
            <main>
                <div className="main__wrapper">
                    <div className="main__title">
                        Ты сегодня покормил кота?
                    </div>
                    <div className="main__cats_types">
                        {listCats(catsNumber)}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;