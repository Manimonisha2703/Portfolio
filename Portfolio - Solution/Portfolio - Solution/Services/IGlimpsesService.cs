using Portfolio___Solution.BusinessObject;

namespace Portfolio___Solution.Services
{
    public interface IGlimpsesService
    {
        void AddGlimpses(Glimpses glimpses);

        List<Glimpses> GetClimpses();
    }
}
