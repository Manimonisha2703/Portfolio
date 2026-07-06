using Microsoft.AspNetCore.Mvc;
using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Services;

namespace Portfolio___Solution.Controller
{
    [ApiController]
    [Route("api/[Controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService projectService;
        public ProjectController(IProjectService projectService)
        {
            this.projectService = projectService;
        }

        [HttpPost("AddProjects")]
        public ActionResult<string> AddProject([FromBody] Project project)
        {
            this.projectService.AddProjects(project);
            return Ok(new
            {
                response = "Project Added Successfully"
            });
        }

        [HttpGet("GetProjects")]
        public ActionResult<List<Project>> GetProjects()
        {
            return this.projectService.GetProjects();
        }

    }
}
