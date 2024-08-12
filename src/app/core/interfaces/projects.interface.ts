


export interface Itag {
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
    tags : Itag[],
    images : string[],
    link : string

}