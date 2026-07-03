using MongoDB.Driver;
using Portfolio___Solution.BusinessObject;

namespace Portfolio___Solution.Repository
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly IMongoCollection<Glimpses> glimpsesCollection;
        private readonly IMongoCollection<string> aboutCollection;
        public PortfolioRepository(IMongoDatabase mongoDatabase) {

            this.glimpsesCollection = mongoDatabase.GetCollection<Glimpses>("Glimpses");
            this.aboutCollection = mongoDatabase.GetCollection<string>("About");

        }

        public void AddGlimpses(Glimpses glimpses)
        {
            this.glimpsesCollection.InsertOne(glimpses);
        }

        public List<Glimpses> GetGlimpses()
        {
            return this.glimpsesCollection.Find(_ => true).ToList();
        }

        public void AddAbout(string description)
        {
            this.aboutCollection.InsertOne(description);
        }
    }
}
