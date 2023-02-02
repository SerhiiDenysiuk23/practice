import {combineEpics, Epic, ofType} from "redux-observable";
import {from, map, mergeMap, Observable} from "rxjs";
import {setCategoryList, setCategoryListAction} from "./categorySlice";
import {getCategoryList} from "../../api/core";

const setCategoryListEpic: Epic = (action$:Observable<ReturnType<typeof setCategoryListAction>>) => {
    return action$.pipe(
        ofType(setCategoryListAction.type),
        mergeMap(action => from(getCategoryList()).pipe(
            map(response => {
                console.log(response)
                return setCategoryList(response)
            })
        ))
    )
}

export const categoryEpics = combineEpics(setCategoryListEpic)