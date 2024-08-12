import { ProjectComponent } from "./project/project.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";



// import { CardFarmaceuticoComponent } from "@shared/components/cards/card-farmaceutico/card-farmaceutico.component";
export const components: any[] = [

    WorkExperienceComponent,
    ProjectComponent
];


export *  from "./work-experience/work-experience.component";
export *  from "./project/project.component";