import {combineEpics, Epic, ofType} from "redux-observable";
import {from, map, mergeMap, Observable} from "rxjs";
import {
    createCategory,
    createCategoryAction, deleteCategory,
    deleteCategoryAction,
    setCategoryList,
    setCategoryListAction
} from "./categorySlice";
import {deleteQuery, getListQuery, postQuery} from "../../api/core";

const setCategoryListEpic: Epic = (action$:Observable<ReturnType<typeof setCategoryListAction>>) => {
    return action$.pipe(
        ofType(setCategoryListAction.type),
        mergeMap(() => from(getListQuery("Categories")).pipe(
            map(response => {
                return setCategoryList(response)
            })
        ))
    )
}

const createCategoryEpic: Epic = (action$:Observable<ReturnType<typeof createCategoryAction>>) => {
    return action$.pipe(
        ofType(createCategoryAction.type),
        mergeMap(action => from(postQuery("Categories", action.payload)).pipe(
            map(response => {
                console.log(response)
                return createCategory(response)
            })
        ))
    )
}

const deleteCategoryEpic: Epic = (action$:Observable<ReturnType<typeof deleteCategoryAction>>) => {
    return action$.pipe(
        ofType(deleteCategoryAction.type),
        mergeMap(action => from(deleteQuery("Categories", action.payload.id)).pipe(
            map(response => {
                console.log(response)
                return deleteCategory(action.payload)
            })
        ))
    )
}

export const categoryEpics = combineEpics(setCategoryListEpic, createCategoryEpic, deleteCategoryEpic)