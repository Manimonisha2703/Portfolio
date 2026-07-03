using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Portfolio___Solution.BusinessObject
{
    public class Glimpses
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Value { get; set; }
        public string Description { get; set; }
    }
}
