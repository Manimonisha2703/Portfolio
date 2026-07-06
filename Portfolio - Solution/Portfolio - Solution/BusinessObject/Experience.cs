using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Portfolio___Solution.BusinessObject
{
    public class Experience
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Role { get; set; }
        public string Company { get; set; }
        public string Duration {get; set;}
        public List<string> WorkDescription { get; set; }
        public List<string> Technologies { get; set; }
    }
}
