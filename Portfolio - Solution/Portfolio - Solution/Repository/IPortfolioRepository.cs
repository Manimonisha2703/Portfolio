using Portfolio___Solution.BusinessObject;

namespace Portfolio___Solution.Repository
{
    public interface IPortfolioRepository
    {
        void AddGlimpses(Glimpses glimpses);
        List<Glimpses> GetGlimpses();
        void AddAbout(About about);
        List<About> GetAboutKeyword();
        void AddStack(Stack stack);
        List<Stack> GetStack();
        void AddExperience(Experience experience);
        List<Experience> GetExperiences();
        void AddProject(Project project);
        List<Project> GetProjects();

    }
}
