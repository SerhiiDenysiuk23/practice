import React, {useState} from 'react';
import Select, {Option} from "./Select";

const OrderElem = () => {
    const photoUrl = process.env.PUBLIC_URL + "/media/category/jacket.png"
    const optionSizeList: Option[] = [
        {value: "S", label: "S"},
        {value: "M", label: "M"},
        {value: "L", label: "L"}
    ]

    const [size, setSize] = useState<string>("")

    const sizeSelectHandler = (option: Option) => {
        setSize(option.value)
    }

    const [count, setCount] = useState<number>(1)

    return (
        <div className="order_elem">
            <div className="order_photo">
                <img src={photoUrl} alt="img"/>
            </div>
            <div className="order_name">
                <div className="order_id">арт. 1589956</div>
                Кремовое пальто
            </div>
            <div className="order_color">
                <div className="color_active" style={{background: "#F1DDAA"}}/>
            </div>
            <div className="order_size">
                <Select selectHandler={sizeSelectHandler} options={optionSizeList}/>
            </div>
            <div className="order_count">
                <button onClick={() => setCount(count - 1)}>-</button>
                <input onChange={(e) => setCount(Number(e.target.value))} value={count} type="number"/>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className="order_price"><b>9450 грн</b></div>
            <div className="order_delete">
                <svg>
                    <use href="media/sprites.svg#delete"/>
                </svg>
            </div>
        </div>
    );
};

export default OrderElem;