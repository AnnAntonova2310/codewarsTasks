export const paginate = (users: Array<any>, currentPage: number, pageSize: number)=> {
    const startIndex = (currentPage-1)*pageSize
    return [...users].splice(startIndex,pageSize)
}