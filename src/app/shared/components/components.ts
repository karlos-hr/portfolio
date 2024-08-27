import { ProjectComponent } from "./project/project.component";
import { SelectionableComponent } from "./selectionable/selectionable.component";
import { SkillComponent } from "./skill/skill.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";



// import { CardFarmaceuticoComponent } from "@shared/components/cards/card-farmaceutico/card-farmaceutico.component";
export const components: any[] = [

    WorkExperienceComponent,
    ProjectComponent,
    SkillComponent,
    SelectionableComponent
];


export *  from "./work-experience/work-experience.component";
export *  from "./project/project.component";
export *  from "./skill/skill.component";
export * from "./selectionable/selectionable.component";