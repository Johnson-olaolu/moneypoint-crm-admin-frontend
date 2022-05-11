export interface IUser {
    id: number
    firstName: string
    lastName : string
    email : string;
    role :IRole
    password : string
}

interface IRole {
    id : number
    name : string
    description : string
    permissions : IPermission[]
    createdAt : Date
}

interface IPermission {
    id : number
    name : string
    number : string
    description : string 
    createdAt : Date
}