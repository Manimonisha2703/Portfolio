using Portfolio___Solution.BusinessObject;

namespace Portfolio___Solution.Services
{
    public interface IAboutService
    {
        void AddAbout(About about);
        List<About> GetAboutKeyword();
    }
}
