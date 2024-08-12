
export interface ITagProject {
    name: string,
    icon : string,
    textColor: string,
    bgColor: string,
    width: number,
    height: number
}


export interface IProject {
    title : string,
    subtitle : string
    description: string[],
    tags : ITagProject[],
    images : string[],
    link : string
}