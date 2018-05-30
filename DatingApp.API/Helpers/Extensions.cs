
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        // THese would allow us to make errors viewable to the clients side and passed into the headers
        public static void AddApplicationError(this HttpResponse response , string message)
        {
                response.Headers.Add("Application-Error",message); // the message comes from the exception
                response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
                response.Headers.Add("Access-Control-Allow-Origin","*");

        }
    }
}