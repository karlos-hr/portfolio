


export interface ITitleSkill{
    name: string,
    color : string,
}

export interface ITechnologiesSkill {
    icon : string
    name : string
    link?: string
}

export interface ISkill {
    title : ITitleSkill
    technologies : ITechnologiesSkill[]
}