export const getDesks = async () => {
    return fetch('/api/v1/desks').then(res => res.json())
}

export const postDesks = async (desk: any): Promise<string> => {
    return fetch('/api/v1/desks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(desk)
    }).then(res => res.json())
}