using Portfolio___Solution.BusinessObject;

namespace Portfolio___Solution.Services
{
    public interface IExperienceService
    {
        void AddExperience(Experience experience);
        List<Experience> GetExperience();
    }
}
