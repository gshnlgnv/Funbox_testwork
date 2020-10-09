import React, { useState } from 'react';
import "./styles/CatItem.css";
//import "./styles/st.scss";
//import "./styles/cat_style.sass";
import cat_pic from "./assets/cat_pic.png";

function CatItem(props) {
    const [ toggle, setToggle ] = useState('false');
    const toggleIt = () =>  setToggle( !(toggle) );

    return(
        <div className="main__cat_blocks">
            <div className="main__item">
                <div className={ toggle ? "main__item__picture_blue" : "main__item__picture_red" } onClick={ () => toggleIt() }>
                    <div className="circle">
                        <div className="circle_weight">{props.foodWeight}</div>
                        <div className="circle_kg">кг</div>
                    </div>
                    <div>
                        <div className="item__text1">Сказочное заморское яство</div>
                        <div className="item__text2">Нямушка</div>
                        <div className="item__text3">с {props.foodType}</div>
                        <div className="item__text4">{props.mousesQnty}</div>
                        <div>
                            <img className="item__pic" src={cat_pic} alt={"cat"}/>
                        </div>
                    </div>
                </div>
                <div className="main__item__bottomtext">Чего сидишь? Порадуй котэ, купи</div>
            </div>
        </div>
    )
}

export default CatItem;