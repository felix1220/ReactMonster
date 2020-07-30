import sampleData from "./sampleData"

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const fetchSampleData = () => {
    return delay(1000).then(() => {
        return Promise.resolve(sampleData)
    })
}

export const fetchUserData = () => {

    return async () => {
      
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        return data;
    }
}