import { observable, action, autorun, computed } from 'mobx';

class MainStore {
    @observable currentViewName = '';  // 'list' / 'details'

    @observable listState = {
        rocketFilter: null,

        isLoading: false,
        // ...

        lauchesData: [], // fetched data
    }

    constructor() {
        
        // autorun fetching data
        // depends on currentViewName and rocketFilter
    }

    @action
    switchView(viewName){
        this.currentViewName = viewName;
    }

    @action
    setFilter(viewName){

    }
}

const instance = new MainStore();

export default instance;