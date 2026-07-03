using Microsoft.AspNetCore.Mvc;
using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Services;

namespace Portfolio___Solution.Controller
{
    [ApiController]
    [Route("api/[Controller]")]
    public class AboutController : ControllerBase
    {
        private readonly AboutService aboutService;
        public AboutController(AboutService aboutService)
        {
            this.aboutService = aboutService;
        }

        [HttpPost("addAboutDesc")]
        public ActionResult<string> PostAboutDescription([FromBody] string description)
        {
            this.aboutService.AddAbout(description);
            return Ok(new
            {
                response = "successfully added"
            });
        }
    }
}
