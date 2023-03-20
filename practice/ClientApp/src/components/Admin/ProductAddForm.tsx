import React, {useState} from 'react';
import "./prodAdd.css"
import Select, {Option} from "../../elements/Select";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Color} from "../../types/Color";
import {Size} from "../../types/Size";
import {Category} from "../../types/Category";

const optionGenerator = (lst: any[]) => {
    let options: Option[] = []
    lst.forEach(item => {
        options.push({label: item.name, value: item.id})
    })
    return options
}

const ProductAddForm = () => {
    const {sizeList} = useAppSelector(state => state.sizeReducer)
    const {colorList} = useAppSelector(state => state.colorReducer)
    const {categoryList} = useAppSelector(state => state.categoryReducer)

    const sizeOptions = optionGenerator(sizeList)
    const colorOptions = optionGenerator(colorList)
    const categoryOptions = optionGenerator(categoryList)

    const [name, setName] = useState<string>('');

    const [color, setColor] = useState<Color | null>(null);
    const [size, setSize] = useState<Size | null>(null);
    const [category, setCategory] = useState<Category | null>(null);

    const [compositionAndCare, setCompositionAndCare] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const [images, setImages] = useState<File[]>([]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleColorChange = (id: number) => {
        const colorValue = colorList.find(item => item.id == id)
        setColor(colorValue ?? null);
    };
    const handleSizeChange = (id: number) => {
        const sizeValue = sizeList.find(item => item.id == id)
        setSize(sizeValue ?? null);
    };

    const handleCategoryChange = (id: number) => {
        const categoryValue = categoryList.find(item => item.id == id)
        setCategory(categoryValue ?? null);
    };

    const handleCompositionAndCareChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCompositionAndCare(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImages([...images, ...Array.from(event.target.files)]);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Отправка данных на сервер
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />

            <Select title={"Выберите цвет"} selectHandler={handleColorChange} options={colorOptions}/>
            <Select title={"Выберите размер"} selectHandler={handleSizeChange} options={sizeOptions}/>
            <Select title={"Выберите категорию"} selectHandler={handleCategoryChange} options={categoryOptions}/>

            <label htmlFor="composition-and-care">Composition and Care:</label>
            <textarea id="composition-and-care" value={compositionAndCare} onChange={handleCompositionAndCareChange} />

            <label htmlFor="long-description">Long description:</label>
            <textarea id="long-description" value={description} onChange={handleDescriptionChange} />

            <label htmlFor="image-picker">Images:</label>
            <input type="file" id="image-picker" multiple onChange={handleImageChange} />
            {images.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt="Product" />
            ))}

            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductAddForm;