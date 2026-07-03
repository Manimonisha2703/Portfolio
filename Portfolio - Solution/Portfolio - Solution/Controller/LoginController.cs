using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using Portfolio___Solution.BusinessObject;
using Portfolio___Solution.Services;

namespace Portfolio___Solution.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            this._loginService = loginService;
        }

        [Route("ValidateUser")]
        [HttpPost]
        public ActionResult<string> LoginUser([FromBody] LoginObject loginObject)
        {
            bool isValidUser = this._loginService.ValidateUser(loginObject.UserName, loginObject.Password);
            if (isValidUser)
            {
                return Ok(new
                {
                    token = ObjectId.GenerateNewId().ToString()
                });
            }
            else
            {
                throw new ArgumentException("Invalid UserName or Password");
            } 
        }
    }
}
