using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Repository;

namespace Portfolio___Solution.Services
{
    public class StackService : IStackService
    {
        private IPortfolioRepository portfolioRepository;
        public StackService(IPortfolioRepository portfolioRepository)
        {
            this.portfolioRepository = portfolioRepository;
        }

        public void AddStack(Stack stackVal)
        {
            this.portfolioRepository.AddStack(stackVal);
        }

        public List<Stack> GetStack()
        {
            return this.portfolioRepository.GetStack();
        }
    }
}
