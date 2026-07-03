using Portfolio___Solution.BusinessObject;

namespace Portfolio___Solution.Repository
{
    public interface IPortfolioRepository
    {
        void AddGlimpses(Glimpses glimpses);
        List<Glimpses> GetGlimpses();
        void AddAbout(string description);

    }
}
