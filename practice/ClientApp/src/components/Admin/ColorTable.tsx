import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Color} from "../../types/Color";
import {createColorAction, deleteColorAction, setColorListAction} from "../../store/color/colorSlice";

const ColorTable = () => {
    const dispatch = useDispatch()
    const {colorList} = useAppSelector(state => state.colorReducer)
    const [colorPost, setColorPost] = useState<Color>({id: 0, hex: "", name: ""})

    const categoryCreateHandler = () => {
        if (colorPost && !colorList.find(item => item.name == colorPost.name)) {
            dispatch(createColorAction(colorPost))
        }
    }

    useEffect(()=> {
        dispatch(setColorListAction())
    }, [])

    return (
        <table>
            <thead>
            <tr>
                <th/>
                <th>Цвет</th>
                <th/>
                <th/>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <input
                        onChange={e => setColorPost({...colorPost, hex: e.target.value})}
                        type="color"
                        value={colorPost.hex}/>
                </td>
                <td>
                    <input
                        onChange={e => setColorPost({...colorPost, hex: e.target.value})}
                        type="text"
                        value={colorPost.hex}
                        placeholder={"Hex"}/>
                </td>
                <td>
                    <input
                        onChange={e => setColorPost({...colorPost, name: e.target.value})}
                        type="text"
                        // value={categoryPost.name}
                        placeholder={"Name"}/>
                </td>
                <td>
                    <button onClick={categoryCreateHandler}>Create</button>
                </td>
            </tr>
            {
                colorList.length > 0
                    ? colorList.map(item =>
                        <tr key={item.id}>
                            <td> <div className={"color"} style={{background: item.hex}}/></td>
                            <td>{item.hex}</td>
                            <td>{item.name}</td>
                            <td><button onClick={()=>{
                                dispatch(deleteColorAction(item))
                            }}>Delete</button></td>
                        </tr>)
                    : null
            }
            </tbody>
        </table>
    );
};

export default ColorTable;