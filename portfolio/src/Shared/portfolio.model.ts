export class GlimpsesInfo {
    value: string;
    description: string;
}

export class SkillsInfo {
    Category: string;
    Name: string;
    ActualSkill: string[];
}

export class ProjectInfo {
    name: string;
    description: string;
    highlight?: string;
}

export class ExperienceInfo {
    role: string;
    company: string;
    duration: string;
    workDescription : Array<string>;
    technologies: Array<string>;
}
export class LoginInfo {
    UserName: string;
    Password: string;
}
export class LoginResponse {
    token: string;
}

export class AboutInfo{
    aboutKeyword: string;
}

export class StackDetails {
    stackType: string;
    stackHeading: string;
    stackList: Array<string>
}