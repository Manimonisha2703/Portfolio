using Microsoft.AspNetCore.Mvc;
using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Services;

namespace Portfolio___Solution.Controller
{
    [ApiController]
    [Route("api/[Controller]")]
    public class ExperienceController : ControllerBase
    {
        private readonly IExperienceService experienceService;
        public ExperienceController(IExperienceService experienceService)
        {
            this.experienceService = experienceService;
        }

        [HttpPost("AddExperience")]
        public ActionResult<string> AddExperience([FromBody] Experience experience)
        {
            this.experienceService.AddExperience(experience);
            return Ok(new
            {
                response = "Experience Added Successfully"
            });
        }

        [HttpGet("GetExperience")]
        public ActionResult<List<Experience>> GetExperience()
        {
            return this.experienceService.GetExperience();
        }
    }
}
