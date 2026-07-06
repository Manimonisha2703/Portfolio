using Portfolio___Solution.BusinessObject;

namespace Portfolio___Solution.Services
{
    public interface IProjectService
    {
        void AddProjects(Project project);
        List<Project> GetProjects();
    }
}
