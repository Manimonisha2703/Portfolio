using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Repository;

namespace Portfolio___Solution.Services
{
    public class AboutService : IAboutService
    {
        private readonly IPortfolioRepository portfolioRepository;
        public AboutService(IPortfolioRepository portfolioRepository)
        {
            this.portfolioRepository = portfolioRepository;
        }

        public void AddAbout(string description)
        {
            this.portfolioRepository.AddAbout(description);
        }
    }
}
