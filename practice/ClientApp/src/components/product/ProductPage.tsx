import React, {useState} from 'react';
import ProductBlock from "../../elements/ProductBlock";
import PhotoGrid from "../../elements/PhotoGrid";
import Breadcrumb from "../../elements/Breadcrumb";
import Select, {Option} from "../../elements/Select";
import DropDownContainer from "../../elements/DropDownContainer";

const ProductPage = () => {
    const colorList: string[] = ["#FFFFFF", "#6F83A4", "#F1DDAA"]
    const optionSizeList: Option[] = [
        {value: "", label: "Выберите размер"},
        {value: "S", label: "S"},
        {value: "M", label: "M"},
        {value: "L", label: "L"}
    ]

    const activeColor = "#F1DDAA"

    const [size, setSize] = useState<string>("")

    const sizeSelectHandler = (option: Option) => {
        setSize(option.value)
    }

    return (
        <main>
            <div className="container">
                <Breadcrumb/>
            </div>

            <section className="container product">
                <PhotoGrid/>
                <div className="product_content">
                    <h3>Кремовое пальто</h3>
                    <div className="product_price"><b>3150 грн</b></div>
                    <ul className="product_color-list">
                        {colorList.map((item, id) => <li key={id}
                                                         className={`color${activeColor == item ? "_active" : ""}`}
                                                         style={{background: item}}/>)}
                    </ul>
                    <div className="product_color-name">Цвет: Кофе с молоком меланж</div>

                    <Select selectHandler={sizeSelectHandler} options={optionSizeList} title={"Выберите размер"}/>

                    <input type="button" value="В КОРЗИНУ"/>
                    <button>
                        <svg>
                            <use href="./media/sprites.svg#like"/>
                        </svg>
                        &nbsp;В ИЗБРАННОЕ
                    </button>

                    <div>Подробности</div>
                    <div className="product_details">
                        <DropDownContainer>
                            <span>Обмеры и описание</span>
                            <div className="product_details-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam delectus ducimus eos est exercitationem, explicabo ipsa ipsam neque praesentium provident quam quo suscipit veritatis voluptate? Debitis est impedit necessitatibus.
                            </div>
                        </DropDownContainer>
                    </div>
                    <div className="product_details">
                        <DropDownContainer>
                            <span>Состав и уход</span>
                            <div className="product_details-description">
                                {`Состав: 50% Шерсть, 50% Полиэстер
                                Подкладка: 100% Полиэстер
                                Утеплитель: 90% Пух, 10% Перо

                                - Не стирать
                                - Гладить при температуре утюга до 110°C
                                - Не отбеливать
                                - Сухая чистка (химчистка)
                                - Барабанная сушка запрещена`}
                            </div>
                        </DropDownContainer>
                    </div>
                </div>
            </section>

            <section className="container product-more">
                <h3>Весь образ</h3>
                <div className="product-more_big">
                    {[...Array(2)].map((value, index) => <ProductBlock key={index}/>)}
                </div>
            </section>

            <section className="container product-more">
                <h3>Дополните образ</h3>
                <div className="product-more_small">
                    {[...Array(2)].map((value, index) => <ProductBlock key={index}/>)}
                </div>
            </section>

            <section className="container product-more">
                <h3>Вам может понравиться</h3>
                <div className="product-more_small">
                    {[...Array(3)].map((value, index) => <ProductBlock key={index}/>)}
                </div>
            </section>

            <section className="container product-more">
                <h3>Вы недавно смотрели</h3>
                <div className="product-more_small">
                    {[...Array(3)].map((value, index) => <ProductBlock key={index}/>)}
                </div>
            </section>
        </main>
    );
};

export default ProductPage;