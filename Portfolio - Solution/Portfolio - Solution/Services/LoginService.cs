using MongoDB.Bson;

namespace Portfolio___Solution.Services
{
    public class LoginService : ILoginService
    {
        private readonly string adminUserName = "Manimonisha";
        private readonly string adminPassword = "Monisha@2703";
        public LoginService() { }

        public bool ValidateUser(string userName, string passWord)
        {
            if (string.IsNullOrEmpty(userName))
            {
                throw new ArgumentNullException(nameof(userName), "UserName should not be null");
            }
            else if (string.IsNullOrEmpty(passWord))
            {
                throw new ArgumentNullException(nameof(passWord), "Password should not be null");
            }
            else if (userName.ToLower() == adminUserName.ToLower() && passWord == adminPassword)
            {
                return true;
            }
            else if (userName.ToLower() != adminUserName.ToLower())
            {
                throw new ArgumentException("Invalid UserName", nameof(userName));
            }
            else if (passWord != adminPassword)
            {
                throw new ArgumentException("Invalid Password", nameof(passWord));
            }

            return false;
        }

    }
}
