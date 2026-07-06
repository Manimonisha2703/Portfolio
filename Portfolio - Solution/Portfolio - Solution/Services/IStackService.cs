using Portfolio___Solution.BusinessObject;

namespace Portfolio___Solution.Services
{
    public interface IStackService
    {
        void AddStack(Stack stackVal);
        List<Stack> GetStack();
    }
}
