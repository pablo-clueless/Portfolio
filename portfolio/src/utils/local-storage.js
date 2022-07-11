

export const setWithKey = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getWithKey = (key) => {
    const jsonObject = localStorage.getItem(key)

    if(!jsonObject) return null

    const data = JSON.parse(jsonObject)
    return data
}

export const removeWithKey = (key) => {
    localStorage.removeItem(key)
}