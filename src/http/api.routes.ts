const todoEndPoint = 'http://localhost:3004/'

export const ApiRoutes = {
    TODO_LIST: `${todoEndPoint}todos`,
    EDIT_LIST: (id: string) => `${todoEndPoint}todos/${id}`,
}