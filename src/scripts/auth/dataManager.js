const url = "http://localhost:3000/users"
const dataManager = {
    getUsers: () => {
        return fetch(`${url}`)
            .then(res => res.json())
    },
    saveUser: (user) => {
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json());
    },
    deleteUsers: (id) => {
        return fetch(`${url}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    },
    editUser: (user, id) => {
        return fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json());
    },
    singleUser: (id) => {
        return fetch(`${url}/${id}`)
            .then(res => res.json())
    },
    searchUsername: (name) => {
        return fetch(`${url}?username=${name}`)
            .then(res => res.json())
    },
    searchUsers: (name, psw) => {
        return fetch(`${url}?username=${name}&password=${psw}`)
            .then(res => res.json())
    }
}

export {dataManager}