// For adding home 

import { async } from "@firebase/util";

export const addHome = async (homeData)=>{

    const url = `http://localhost:7000/homes`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(homeData)
    })

    const data = await response.json();

    return data
}


// get all homes
export const getAllHomes = async ()=>{
    const url = `http://localhost:7000/homes`;
    const response = await fetch(url);
    const homes = await response.json()
    return homes
}