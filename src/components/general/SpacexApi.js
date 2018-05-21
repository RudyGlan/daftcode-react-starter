const ROOT_URL = 'https://api.spacexdata.com/v2/launches';

export function getAllYearLaunches(year){
    return global.fetch(`${ROOT_URL}?launch_year=${year}`)
        .then(response => response.json());
}

export function getAllRocketLaunches(rocket_id){
    return global.fetch(`${ROOT_URL}?rocket_id=${rocket_id}`)
        .then(response => response.json());
}

export function getAllLaunches(){
    return global.fetch(`${ROOT_URL}/all`)
        .then(response => response.json());
}
