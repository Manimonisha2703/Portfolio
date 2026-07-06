using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Repository;

namespace Portfolio___Solution.Services
{
    public class ProjectService : IProjectService
    {
        private readonly IPortfolioRepository portfolioRepository;
        public ProjectService(IPortfolioRepository portfolioRepository)
        {
            this.portfolioRepository = portfolioRepository;
        }

        public void AddProjects(Project project)
        {
            this.portfolioRepository.AddProject(project);
        }

        public List<Project> GetProjects()
        {
            return this.portfolioRepository.GetProjects();
        }
    }
}
