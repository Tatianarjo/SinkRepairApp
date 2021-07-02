import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
    mainContainer.innerHTML = SinkRepair()
}
    )
}

//Here I'm fetching the data from and API and storing it in the application before I convert it to HTML
//it is pushing everything out here
render()


// document.addEventListener("stateChanged", event => {
//     console.log("State of data has changed. Regenerating HTML...")
//     render()
// })

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)