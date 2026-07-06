import { Component, OnInit } from '@angular/core';
import { PortfolioAdminHttpService } from 'src/Shared/portfolio-admin-http.service';
import { ExperienceInfo } from 'src/Shared/portfolio.model';

@Component({
  selector: 'app-portfolio-experience',
  templateUrl: './portfolio-experience.component.html',
  styleUrls: ['./portfolio-experience.component.scss']
})
export class PortfolioExperienceComponent implements OnInit {

  experiences : Array<ExperienceInfo> = [];

  constructor(private portfolioAdminHttpService: PortfolioAdminHttpService) { }

  ngOnInit(): void {
    // this.experiences.push({
    //   Role: "Software Engineer",
    //   Company: "XYZ Technologies",
    //   Duration: "Jan 2020 - Present",
    //   WorkDescription: [
    //     "Developed and maintained web applications using Angular and .NET Core.",
    //     "Collaborated with cross-functional teams to define, design, and ship new features.",
    //     "Optimized applications for maximum speed and scalability."
    //   ],
    //   Technologies: ["Angular", ".NET Core", "C#", "SQL Server"]
    // });
    // this.experiences.push({
    //   Role: "Associate Software Engineer",
    //   Company: "XYZ Technologies",
    //   Duration: "Jan 2020 - Present",
    //   WorkDescription: [
    //     "Developed and maintained web applications using Angular and .NET Core.",
    //     "Collaborated with cross-functional teams to define, design, and ship new features.",
    //     "Optimized applications for maximum speed and scalability."
    //   ],
    //   Technologies: ["Angular", ".NET Core", "C#", "SQL Server"]
    // });
    // this.experiences.push({
    //   Role: "Trainee",
    //   Company: "XYZ Technologies",
    //   Duration: "Jan 2020 - Present",
    //   WorkDescription: [
    //     "Developed and maintained web applications using Angular and .NET Core.",
    //     "Collaborated with cross-functional teams to define, design, and ship new features.",
    //     "Optimized applications for maximum speed and scalability."
    //   ],
    //   Technologies: ["Angular", ".NET Core", "C#", "SQL Server"]
    // });
    // this.experiences.push({
    //   Role: "Intern",
    //   Company: "XYZ Technologies",
    //   Duration: "Jan 2020 - Present",
    //   WorkDescription: [
    //     "Developed and maintained web applications using Angular and .NET Core.",
    //     "Collaborated with cross-functional teams to define, design, and ship new features.",
    //     "Optimized applications for maximum speed and scalability."
    //   ],
    //   Technologies: ["Angular", ".NET Core", "C#", "SQL Server"]
    // });

    this.getWorkExperience();
  }

  getWorkExperience() {
    this.portfolioAdminHttpService.getExperience().subscribe({
      next: (experience: Array<ExperienceInfo>) => {
        experience.forEach(exp => {
          const tempExp: ExperienceInfo = {
            role: exp.role,
            company: exp.company,
            duration: exp.duration,
            workDescription: exp.workDescription,
            technologies: exp.technologies
          }

          this.experiences.push(tempExp);
        })
      }
    })
  }

}
