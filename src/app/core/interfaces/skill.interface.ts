

export interface IColorTitleSkill {
    from : string,
    via : string,
    to : string
}

export interface ITitleSkill{
    name: string,
    color : IColorTitleSkill,
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