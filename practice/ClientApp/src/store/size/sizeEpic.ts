import {combineEpics, Epic, ofType} from "redux-observable";
import {from, map, mergeMap, Observable} from "rxjs";
import {createSize, createSizeAction, deleteSize, deleteSizeAction, setSizeList, setSizeListAction} from "./sizeSlice";
import {deleteQuery, getListQuery, postQuery} from "../../api/core";

const setSizeListEpic: Epic = (action$:Observable<ReturnType<typeof setSizeListAction>>) => {
    return action$.pipe(
        ofType(setSizeListAction.type),
        mergeMap(() => from(getListQuery("Sizes")).pipe(
            map(response => {
                return setSizeList(response)
            })
        ))
    )
}

const createSizeEpic: Epic = (action$:Observable<ReturnType<typeof createSizeAction>>) => {
    return action$.pipe(
        ofType(createSizeAction.type),
        mergeMap(action => from(postQuery("Sizes", action.payload)).pipe(
            map(response => {
                console.log(response)
                return createSize(response)
            })
        ))
    )
}

const deleteSizeEpic: Epic = (action$:Observable<ReturnType<typeof deleteSizeAction>>) => {
    return action$.pipe(
        ofType(deleteSizeAction.type),
        mergeMap(action => from(deleteQuery("Sizes", action.payload.id)).pipe(
            map(response => {
                console.log(response)
                return deleteSize(action.payload)
            })
        ))
    )
}

export const sizeEpics = combineEpics(setSizeListEpic, createSizeEpic, deleteSizeEpic)