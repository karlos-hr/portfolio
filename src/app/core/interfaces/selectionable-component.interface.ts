import { IOptionsProjects } from "./options-projects.interace";



export interface ISelectionableComponent  {

    title : string,
    options : IOptionsProjects[],
    selected?: IOptionsProjects

}