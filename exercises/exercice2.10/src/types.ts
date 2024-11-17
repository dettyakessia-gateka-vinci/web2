interface Film{
    title:string;
    director:string;
    duration:number;
    link?:string;
    description?:string;
    budget?:number;
}
interface Movie{
    title:string,
    director:string,
    description:string,
    duration:number,
}

export  type {Film,Movie};