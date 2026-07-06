using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Portfolio___Solution.BusinessObject
{
    public class Stack
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string stackType { get; set; }
        public string stackHeading { get; set; }
        public List<string> stackList { get; set; }
    }
}
