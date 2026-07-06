using MongoDB.Driver;
using Portfolio___Solution.BusinessObject;

namespace Portfolio___Solution.Repository
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly IMongoCollection<Glimpses> glimpsesCollection;
        private readonly IMongoCollection<About> aboutCollection;
        private readonly IMongoCollection<Stack> stackCollection;
        private readonly IMongoCollection<Experience> experienceCollection;
        private readonly IMongoCollection<Project> projectCollection;
        public PortfolioRepository(IMongoDatabase mongoDatabase) {

            this.glimpsesCollection = mongoDatabase.GetCollection<Glimpses>("Glimpses");
            this.aboutCollection = mongoDatabase.GetCollection<About>("AboutKeyWord");
            this.stackCollection = mongoDatabase.GetCollection<Stack>("Stack");
            this.experienceCollection = mongoDatabase.GetCollection<Experience>("Experience");
            this.projectCollection = mongoDatabase.GetCollection<Project>("Project");

        }

        public void AddGlimpses(Glimpses glimpses)
        {
            this.glimpsesCollection.InsertOne(glimpses);
        }

        public List<Glimpses> GetGlimpses()
        {
            return this.glimpsesCollection.Find(_ => true).ToList();
        }

        public void AddAbout(About about)
        {
            this.aboutCollection.InsertOne(about);
        }

        public List<About> GetAboutKeyword()
        {
            return this.aboutCollection.Find(_ => true).ToList();
        }

        public void AddStack(Stack stack)
        {
            this.stackCollection.InsertOne(stack);
        }

        public List<Stack> GetStack()
        {
            return this.stackCollection.Find(_ => true).ToList();
        }

        public void AddExperience(Experience experience)
        {
            this.experienceCollection.InsertOne(experience);
        }

        public List<Experience> GetExperiences()
        {
            return this.experienceCollection.Find(_ => true).ToList();
        }

        public void AddProject(Project project)
        {
            this.projectCollection.InsertOne(project);
        }

        public List<Project> GetProjects()
        {
            return this.projectCollection.Find(_ => true).ToList();
        }
    }
}
