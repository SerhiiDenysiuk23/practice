import {combineEpics, Epic, ofType} from "redux-observable";
import {from, map, mergeMap, Observable} from "rxjs";
import {
    createCategory,
    createCategoryAction, deleteCategory,
    deleteCategoryAction,
    setCategoryList,
    setCategoryListAction
} from "./categorySlice";
import {categoryQueries} from "../../api/categoryQueries";

const setCategoryListEpic: Epic = (action$:Observable<ReturnType<typeof setCategoryListAction>>) => {
    return action$.pipe(
        ofType(setCategoryListAction.type),
        mergeMap(() => from(categoryQueries.getCategoryList()).pipe(
            map(response => {
                console.log(response)
                return setCategoryList(response)
            })
        ))
    )
}

const createCategoryEpic: Epic = (action$:Observable<ReturnType<typeof createCategoryAction>>) => {
    return action$.pipe(
        ofType(createCategoryAction.type),
        mergeMap(action => from(categoryQueries.postCategory(action.payload)).pipe(
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
        mergeMap(action => from(categoryQueries.deleteCategory(action.payload.id)).pipe(
            map(response => {
                console.log(response)
                return deleteCategory(action.payload)
            })
        ))
    )
}

export const categoryEpics = combineEpics(setCategoryListEpic, createCategoryEpic, deleteCategoryEpic)