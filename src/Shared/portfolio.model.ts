export class GlimpsesInfo {
    Value: string;
    Name: string;
}

export class SkillsInfo {
    Category: string;
    Name: string;
    ActualSkill: string[];
}

export class ProjectInfo {
    Name: string;
    Description: string;
    Highlight?: string;
    Technologies: string[];
}

export class ExperienceInfo {
    Role: string;
    Company: string;
    Duration: string;
    WorkDescription : Array<string>;
    Technologies: Array<string>;
}