import {apiGetLaunchByNumber, apiGetUpcomingLaunchByNumber, apiGetAllLaunches} from './SpacexApi'

export function getLaunchByNumber1(nr){
    apiGetLaunchByNumber(nr).then(k => {
        console.log(k);
        return k;
    })
}