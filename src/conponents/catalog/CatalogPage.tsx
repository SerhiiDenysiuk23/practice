import React, {useState} from 'react';
import Breadcrumb from "../../elements/Breadcrumb";
import ProductBlock from "../../elements/ProductBlock";
import Select, {Option} from "../../elements/Select";

const CatalogPage = () => {
    const itemList = [...Array(17)].map(((value, index) => `item ${index}`))
    const optionSizeList: Option[] = [
        {value: "", label: "Размер"},
        {value: "S", label: "S"},
        {value: "M", label: "M"},
        {value: "L", label: "L"}
    ]
    const optionColorList: Option[] = [
        {value: "", label: "Цвет"},
        {value: "Red", label: "Red"},
        {value: "Green", label: "Green"},
        {value: "Blue", label: "Blue"}
    ]
    const optionPriceList: Option[] = [
        {value: 0, label: "Цена"},
        {value: 1, label: "10 000 - 20 000"},
        {value: 2, label: "20 000 - 30 000"},
        {value: 3, label: "40 000 - 50 000"}
    ]
    const optionSortList: Option[] = [
        {value: 0, label: "Сортировать по"},
        {value: 1, label: "Цене"},
        {value: 2, label: "Цвету"},
        {value: 3, label: "Размере"}
    ]

    const [size, setSize] = useState<string>("")
    const [color, setColor] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [sort, setSort] = useState<string>("")

    const sizeSelectHandler = (option: Option) => {
        setSize(option.value)
    }
    const colorSelectHandler = (option: Option) => {
        setColor(option.value)
    }
    const priceSelectHandler = (option: Option) => {
        setPrice(option.value)
    }
    const sortSelectHandler = (option: Option) => {
        setSort(option.value)
    }

    const [isOpenCatalog, setIsOpenCatalog] = useState<boolean>(false)
    const [isOpenCriteria, setIsOpenCriteria] = useState<boolean>(false)

    return (
        <main>
            <div className="container">
                <Breadcrumb/>
            </div>
            <section className="container catalog">
                <ul className="catalog_list">
                    <li>Каталог</li>
                    {
                        itemList.map((value, index) => <li key={index}><a href="">{value}</a></li>)
                    }
                </ul>


                <div className="catalog_content">


                    <div onClick={() => setIsOpenCatalog(!isOpenCatalog)}
                         className={`catalog_list_mobile ${isOpenCatalog ? "open_catalog" : ""}`}>
                        <span>Каталог</span>
                        <ul>
                            {itemList.map((value, index) => <li key={index}><a href="">{value}</a></li>)}
                        </ul>
                    </div>

                    <ul className={`criteria ${isOpenCriteria ? "open_criteria" : ""} `}>
                        <span onClick={() => setIsOpenCriteria(!isOpenCriteria)}>Фильтры
                            <svg viewBox="0 0 11 13" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.75 7.75V11.5L4.25 12.75V7.75L0.5 2.125V0.875H10.5V2.125L6.75 7.75ZM2.0025 2.125L5.5 7.37125L8.9975 2.125H2.0025Z"/>
                            </svg>
                        </span>
                        <li>
                            <Select title={"Размер"} selectHandler={sizeSelectHandler} options={optionSizeList}/>
                        </li>
                        <li>
                            <Select title={"Цвет"} selectHandler={colorSelectHandler} options={optionColorList}/>
                        </li>
                        <li>
                            <Select title={"Цена"} selectHandler={priceSelectHandler} options={optionPriceList}/>
                        </li>
                        <li>
                            <Select title={"Сортировать по"} selectHandler={sortSelectHandler}
                                    options={optionSortList}/>
                        </li>
                    </ul>

                    <div className="catalog_grid">
                        {[...Array(12)].map((value, index) => <ProductBlock key={index}/>)}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CatalogPage;