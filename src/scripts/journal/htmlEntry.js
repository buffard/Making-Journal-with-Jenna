//representation of DOM entries
const htmlEntry = (entry) => {
    return `
    <div>
    <h2>${entry.title}</h2>
    <p>${entry.date}</p>
    <p>${entry.content}</p>
    <p>${entry.mood}</p>
    <button id="delete!${entry.id}">Delete</button>
    <button id="edit!${entry.id}">Edit</button>
    </div>`
}

export {htmlEntry}