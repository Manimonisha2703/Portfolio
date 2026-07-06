using Microsoft.AspNetCore.Mvc;
using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Services;

namespace Portfolio___Solution.Controller
{
    [ApiController]
    [Route("api/[Controller]")]
    public class StackController : ControllerBase
    {
        private IStackService stackService;
        public StackController(IStackService stackService)
        {
            this.stackService = stackService;
        }

        [HttpPost("AddStack")]
        public ActionResult<string> AddStack([FromBody] Stack stackVal)
        {
            this.stackService.AddStack(stackVal);
            return this.Ok(new
            {
                response = "Stack added succesfully"
            });
        }

        [HttpGet("GetStack")]
        public ActionResult<List<Stack>> GetStack()
        {
            return this.stackService.GetStack();
        }
    }
}
