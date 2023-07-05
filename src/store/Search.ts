import {makeAutoObservable} from "mobx";
import {getPages} from "../api";
import {IPage} from "../types/types";

class Search {
    private _pages: IPage[] = []
    private _query = ""
    private _limit = 10
    private _isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    fetchPages() {
        this._isLoading = true
        getPages(this._query, this._limit).then(value => {
            this._pages = []
            if (value instanceof Array) {
                for (let i = 0; i < value[1].length; i++) {
                    this._pages.push({title: value[1][i], url: value[3][i]})
                }
            }
            this._isLoading = false
        })
    }

    set query(query: string) {
        this._query = query
    }

    get query() {
        return this._query
    }

    set limit(limit: number) {
        this._limit = limit
    }

    get isLoading() {
        return this._isLoading
    }

    get pages() {
        return this._pages
    }
}


export default new Search()