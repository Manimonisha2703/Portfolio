using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.HttpSys;
using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Services;

namespace Portfolio___Solution.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class GlimpsesController : ControllerBase
    {
        private readonly IGlimpsesService glimpsesService;
        public GlimpsesController(IGlimpsesService glimpsesService)
        {
            this.glimpsesService = glimpsesService;
        }

        [HttpPost("addGlimpses")]
        public ActionResult<string> AddGlimpses([FromBody] Glimpses glimpses)
        {
            this.glimpsesService.AddGlimpses(glimpses);
            return Ok(new
            {
                response = "successfully added"
            });
            
        }

        [HttpGet("GetGlimpses")]
        public ActionResult<List<Glimpses>> GetGlimpses()
        {
            return this.glimpsesService.GetClimpses();
        }
    }
}
