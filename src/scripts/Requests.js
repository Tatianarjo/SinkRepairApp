import { getRequests, deleteRequest } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map((request) => {
                return `
                <li>
                    ${request.description} and costs $${request.budget}
                    <button class="request__delete" 
                            id="request--${request.id}">
                        Delete
                    </button>
                </li>
            `
            }).join("")
        }
        </ul>
    `

    return html
}
//line 19 I'm saying each request not requests
//line 22 when I put request.address it still works? Why is that? Why isn't it showing the address on the bottom instead

//line 9 defines the function that will be passed to the map()

