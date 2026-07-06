using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Portfolio___Solution.BusinessObject
{
    public class Project
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string? highlight { get; set; }
    }
}
