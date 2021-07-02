const applicationState = {
   requests: []
}
//this stores the data in my application state when I fetch it.
const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const fetchRequests = () => {
    
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const sendRequest = (obj) => {
    
    return fetch(`${API}/requests`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

//this is part of the export that starts on line 19; I'm adding the request to my database
//Hey API Create something new page when I export the sendRequest

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

//this defines & exports a function that returns a copy of the requests state

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

//line 46 was added; I'm on chapter 8 Denying Service Requests You got this Tot!



