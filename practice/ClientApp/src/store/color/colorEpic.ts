import {combineEpics, Epic, ofType} from "redux-observable";
import {from, map, mergeMap, Observable} from "rxjs";
import {deleteQuery, getListQuery, postQuery} from "../../api/core";
import {
    createColor,
    createColorAction,
    deleteColor,
    deleteColorAction,
    setColorList,
    setColorListAction
} from "./colorSlice";

const setColorListEpic: Epic = (action$:Observable<ReturnType<typeof setColorListAction>>) => {
    return action$.pipe(
        ofType(setColorListAction.type),
        mergeMap(() => from(getListQuery("Colors")).pipe(
            map(response => {
                console.warn(response)
                return setColorList(response)
            })
        ))
    )
}

const createColorEpic: Epic = (action$:Observable<ReturnType<typeof createColorAction>>) => {
    return action$.pipe(
        ofType(createColorAction.type),
        mergeMap(action => from(postQuery("Colors", action.payload)).pipe(
            map(response => {
                console.log(response)
                return createColor(response)
            })
        ))
    )
}

const deleteColorEpic: Epic = (action$:Observable<ReturnType<typeof deleteColorAction>>) => {
    return action$.pipe(
        ofType(deleteColorAction.type),
        mergeMap(action => from(deleteQuery("Colors", action.payload.id)).pipe(
            map(response => {
                console.log(response)
                return deleteColor(action.payload)
            })
        ))
    )
}

export const colorEpics = combineEpics(setColorListEpic, createColorEpic, deleteColorEpic)