const ROOT_LAUNCH_URL = 'https://api.spacexdata.com/v2/launches';
const ROOT_ROCKET_URL = 'https://api.spacexdata.com/v2/rockets';
const ROOT_LAUNCHPAD_URL = 'https://api.spacexdata.com/v2/launchpads';


export async function getAllYearLaunches(year){
    let response = await global.fetch(`${ROOT_LAUNCH_URL}/all?launch_year=${year}`);
    let data = await response.json();
    return {data: data, status: response.status};
}

export async function getAllRocketLaunches(rocket_id){
    let response = await global.fetch(`${ROOT_LAUNCH_URL}/all?rocket_id=${rocket_id}`);
    let data = await response.json();
    return {data: data, status: response.status};
}

export async function getAllLaunches(){
    let response = await global.fetch(`${ROOT_LAUNCH_URL}/all`);
    let data = await response.json();
    return {data: data, status: response.status};
}

export async function getLaunchByNumber(flight_number){
    let response = await global.fetch(`${ROOT_LAUNCH_URL}/all?flight_number=${flight_number}`);
    let data = await response.json();
    return {data: data, status: response.status};
}

export async function getUpcomingLaunchByNumber(flight_number){
    let response = await global.fetch(`${ROOT_LAUNCH_URL}/upcoming?flight_number=${flight_number}`);
    let data = await response.json();
    return {data: data, status: response.status};
}

export async function getRocketById(rocket_id){
    let response = await global.fetch(`${ROOT_ROCKET_URL}/${rocket_id}`);
    let data = await response.json();
    return {data: data, status: response.status};
}

export async function getLaunchpadById(launchpad_id){
    let response = await global.fetch(`${ROOT_LAUNCHPAD_URL}/${launchpad_id}`);
    let data = await response.json();
    return {data: data, status: response.status};
}