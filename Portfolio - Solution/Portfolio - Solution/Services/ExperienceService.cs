using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Repository;

namespace Portfolio___Solution.Services
{
    public class ExperienceService : IExperienceService
    {
        private readonly IPortfolioRepository portfolioRepository;
        public ExperienceService(IPortfolioRepository portfolioRepository)
        {
            this.portfolioRepository = portfolioRepository;
        }

        public void AddExperience(Experience experience)
        {
            this.portfolioRepository.AddExperience(experience);
        }

        public List<Experience> GetExperience()
        {
            return this.portfolioRepository.GetExperiences();
        }
    }
}
