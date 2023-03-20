import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Size} from "../../types/Size";
import {createSizeAction, deleteSizeAction, setSizeListAction} from "../../store/size/sizeSlice";

const SizeTable = () => {
    const dispatch = useDispatch()
    const {sizeList} = useAppSelector(state => state.sizeReducer)

    const [sizePost, setSizePost] = useState<Size | null>(null)

    const categoryCreateHandler = () => {
        if (sizePost && !sizeList.find(item => item.name == sizePost.name)) {
            dispatch(createSizeAction(sizePost))
        }
    }

    useEffect(()=> {
        dispatch(setSizeListAction())
    }, [])

    return (
        <table>
            <thead>
            <tr>
                <th colSpan={2}>Размер</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <input
                        onChange={e => setSizePost({id: 0, name: e.target.value})}
                        type="text"
                        // value={categoryPost.name}
                        placeholder={"Name"}/>
                </td>
                <td>
                    <button onClick={categoryCreateHandler}>Create</button>
                </td>
            </tr>
            {
                sizeList.length > 0
                    ? sizeList.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td><button onClick={()=>{
                                dispatch(deleteSizeAction(item))
                            }}>Delete</button></td>
                        </tr>)
                    : null
            }
            </tbody>
        </table>
    );
};

export default SizeTable;