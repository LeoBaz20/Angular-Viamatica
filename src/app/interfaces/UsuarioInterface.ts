export interface UsuarioInterface{
    email: string;
    username: string;
    password: string;
    name:{
        firstname:string,
        lastname:string
    };
}