import { observable, action, autorun, computed } from 'mobx';
import {getLaunchById, getAllLaunches, getAllRocketLaunches, getLaunchByNumber, getRocketById, getLaunchpadById} from '../components/general/SpacexApi'

class MainStore {
    @observable currentViewName = 'list';  // 'list' / 'details'
    @observable rocketFilter = 'all';
    @observable launchId = '';

    @observable listState = {
        rocketFilter: null,

        isLoading: false,
        isListLoading: false,
        isError: false,
        errorStatus: '',
        // ...
        launch: '',
        rocket: '',
        launchSite: '',
        launchesData: [], // fetched data

    }

    constructor() {
        this.disposeAutorun = autorun(async () => {
            if(this.currentViewName === 'list'){
                this.listState.isListLoading = true;
                let response;
                if(this.rocketFilter == 'all' ) {
                    response = await getAllLaunches();
                } else {
                    response = await getAllRocketLaunches(this.rocketFilter); 
                }
                if(response.status >= 300){
                    this.listState.isError = true;
                    this.listState.errorStatus = response.status;
                } else {
                    this.listState.isError = false;
                    this.listState.errorStatus = '';
                }
                this.listState.launchesData = response.data;
                this.listState.isListLoading = false;
            }
            else {
                this.listState.isLoading = true;
                let error;
                let launch, rocket, pad;
                launch = await getLaunchByNumber(this.launchId);
                this.listState.launch = launch.data[0];
                if(launch.status >= 300){
                    this.listState.isError = true;
                    this.listState.errorStatus = launch.status;
                    this.listState.isLoading = false;
                    return;
                }
                if (launch.data.length > 0) {
                    rocket = await getRocketById(launch.data[0].rocket.rocket_id);
                    this.listState.rocket = rocket.data;
                    if(rocket.status >= 300){
                        this.listState.isError = true;
                        this.listState.errorStatus = rocket.status;
                        this.listState.isLoading = false;
                        return;
                    }
                    pad = await getLaunchpadById(launch.data[0].launch_site.site_id);
                    this.listState.launchSite = pad.data;
                    if(pad.status >= 300){
                        this.listState.isError = true;
                        this.listState.errorStatus = pad.status;
                        this.listState.isLoading = false;
                        return;
                    }
                } else {
                    this.listState.isError = true;
                    this.listState.errorStatus = 'wrong data';
                    this.listState.isLoading = false;
                    return;
                }

                this.listState.isLoading = false;
            }
        })
        // autorun fetching data
        // depends on currentViewName and rocketFilter
    }

    @action
    switchView(viewName) {
        this.currentViewName = viewName;
    }

    @action
    setFilter(viewName) {
        this.rocketFilter = viewName;

    }

    @action
    getLaunchId(id) {
        this.switchView('details');
        this.launchId = id;
    }
}

const instance = new MainStore();

export default instance;