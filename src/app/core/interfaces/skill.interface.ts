

export interface IColorTitleSkill {
    from : string,
    via : string,
    to : string
}

export interface ITitleSkill{
    name: string,
    color : IColorTitleSkill,
}

export interface IIconTitleSkill{
    url : string,
    width? : number,
    height? : number,
    color? : string
}

export interface ITechnologiesSkill {
    icon : IIconTitleSkill
    name : string
    link?: string
}

export interface ISkill {
    title : ITitleSkill
    technologies : ITechnologiesSkill[]
}