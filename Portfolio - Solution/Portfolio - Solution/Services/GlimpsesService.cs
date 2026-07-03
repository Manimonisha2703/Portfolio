using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Repository;

namespace Portfolio___Solution.Services
{
    public class GlimpsesService : IGlimpsesService
    {
        private readonly IPortfolioRepository portfolioRepository;
        public GlimpsesService(IPortfolioRepository portfolioRepository) {
            this.portfolioRepository = portfolioRepository;
        }

        public void AddGlimpses(Glimpses glimpses)
        {
            this.portfolioRepository.AddGlimpses(glimpses);
        }

        public List<Glimpses> GetClimpses()
        {
            return this.portfolioRepository.GetGlimpses();
        }
    }
}
