const ROOT_LAUNCH_URL = 'https://api.spacexdata.com/v2/launches';
const ROOT_ROCKET_URL = 'https://api.spacexdata.com/v2/rockets';
const ROOT_LAUNCHPAD_URL = 'https://api.spacexdata.com/v2/launchpads';


export function getAllYearLaunches(year){
    return global.fetch(`${ROOT_LAUNCH_URL}/all?launch_year=${year}`)
    .then(response => {
        if(response.code >= 300){
            return "";
        } else {
            return response.json()
        }
    });
}

export function getAllRocketLaunches(rocket_id){
    return global.fetch(`${ROOT_LAUNCH_URL}/all?rocket_id=${rocket_id}`)
        .then(response => {
            if(response.code >= 300){
                return "";
            } else {
                return response.json()
            }
        });
}

export function getAllLaunches(){
    return global.fetch(`${ROOT_LAUNCH_URL}/all`)
    .then(response => {
        if(response.code >= 300){
            return "";
        } else {
            return response.json()
        }
    });
}

export function getLaunchByNumber(flight_number){
    return global.fetch(`${ROOT_LAUNCH_URL}/all?flight_number=${flight_number}`)
    .then(response => {
        if(response.code >= 300){
            return "";
        } else {
            return response.json()
        }
    });
}

export function getUpcomingLaunchByNumber(flight_number){
    return global.fetch(`${ROOT_LAUNCH_URL}/upcoming?flight_number=${flight_number}`)
    .then(response => {
        if(response.code >= 300){
            return "";
        } else {
            return response.json()
        }
    });
}

export function getRocketById(rocket_id){
    return global.fetch(`${ROOT_ROCKET_URL}/${rocket_id}`)
    .then(response => {
        if(response.code >= 300){
            return "";
        } else {
            return response.json()
        }
    });
}

export function getLaunchpadById(launchpad_id){
    return global.fetch(`${ROOT_LAUNCHPAD_URL}/${launchpad_id}`)
    .then(response => {
        if(response.code >= 300){
            return "";
        } else {
            return response.json()
        }
    });
}



// export function apiGetAllYearLaunches(year){
//     return global.fetch(`${ROOT_URL}?launch_year=${year}`)
//         .then(response => response);
// }

// export function apiGetAllRocketLaunches(rocket_id){
//     return global.fetch(`${ROOT_URL}?rocket_id=${rocket_id}`)
//         .then(response => response);
// }

// export function apiGetAllLaunches(){
//     return global.fetch(`${ROOT_URL}/all`)
//         .then(response => response);
// }

// export function apiGetLaunchByNumber(flight_number){
//     return global.fetch(`${ROOT_URL}?flight_number=${flight_number}`)
//         .then(response => response);
// }

// export function apiGetUpcomingLaunchByNumber(flight_number){
//     return global.fetch(`${ROOT_URL}/upcoming?flight_number=${flight_number}`)
//         .then(response => response);
// }

