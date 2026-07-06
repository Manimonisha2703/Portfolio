using Microsoft.AspNetCore.Mvc;
using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Services;

namespace Portfolio___Solution.Controller
{
    [ApiController]
    [Route("api/[Controller]")]
    public class AboutController : ControllerBase
    {
        private readonly IAboutService aboutService;
        public AboutController(IAboutService aboutService)
        {
            this.aboutService = aboutService;
        }

        [HttpPost("addAboutkeyword")]
        public ActionResult<string> PostAboutKeyword([FromBody] About about)
        {
            this.aboutService.AddAbout(about);
            return Ok(new
            {
                response = "successfully added"
            });
        }

        [HttpGet("getAboutKeyWord")]
        public ActionResult<List<About>> GetAboutKeyword()
        {
           return this.aboutService.GetAboutKeyword();
        }
    }
}
