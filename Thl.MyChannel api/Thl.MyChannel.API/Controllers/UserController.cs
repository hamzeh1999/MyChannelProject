using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using System;
using System.Collections.Generic;
using System.IO;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.DTO;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        public UserController(IUserService _userService)
        {
            userService = _userService;
        }

        [HttpPost]
        [Route("UploadImg")]
        public User_ UploadImage()
        {
            try
            {
                var Image = Request.Form.Files[0];
                var ImageName = Guid.NewGuid().ToString() + "_" + Image.FileName;
                var FullPath = Path.Combine("C:\\Users\\user\\Desktop\\finalAnwar\\finalAnwar\\src\\assets\\images", ImageName);
                using (var stream = new FileStream(FullPath, FileMode.Create))
                {
                    Image.CopyTo(stream);
                }
                User_ user = new User_();
                user.UserImage = ImageName;
                return user;




            }
            catch
            {
                return null;
            }


        }



        [HttpPost]
        [ProducesResponseType(typeof(User_), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool CREATEuser([FromBody]User_ user)
        {
            return userService.CREATEuser(user);

        }


        [HttpGet]
        [ProducesResponseType(typeof(List<User_>), StatusCodes.Status200OK)]
        public List<User_> GETALLusers()
        {
            return userService.GETALLusers();
        }


        [HttpPut]
        [ProducesResponseType(typeof(User_), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public bool UPDATEuser([FromBody] User_ user)
        {
            return userService.UPDATEuser(user);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public bool DELETEuser(int id)
        {
            return userService.DELETEuser(id);  
        }
        [HttpGet]
        [ProducesResponseType(typeof(List<NumOfRegisterUserDTO>), StatusCodes.Status200OK)]
        [Route("NumOfRegisterUsers")]
        public List<NumOfRegisterUserDTO> NumOfRegisterUsers()
        {
            return userService.NumOfRegisterUsers();

        }
        [HttpPost]
        [ProducesResponseType(typeof(List<NumOfRegisterUserDTO>), StatusCodes.Status200OK)]
        [Route("SearschingNumberOFUserByDate")]

        public List<NumOfRegisterUserDTO> SearchingNumberOFUser([FromBody]SearchingNumberOfUserCall date)
        {
            return userService.SearchingNumberOFUser(date);
        }
        [HttpGet]
        [ProducesResponseType(typeof(List<NumOfRegisterUserDTO>), StatusCodes.Status200OK)]
        [Route("GetUserById/{userId}")]
        public List<User_> GetUserById(int userId)
        {
            return userService.GetUserById(userId);
        }

        [HttpPost]
        [ProducesResponseType(typeof(List<UserLoginDTO>), StatusCodes.Status200OK)]
        [Route("Login")]
        public IActionResult UserLogin(UserLoginCallDTO user)
        {
            var result = userService.UserLogin(user);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return Unauthorized();

            }
            /*return userService.UserLogin(user)*/;
        }

        [HttpPost]
        [Route("Email")]
        public bool Email([FromBody] Email email)
        {
            //Email obj
            MimeMessage mimeMessage = new MimeMessage();

            // from
            MailboxAddress from = new MailboxAddress("Tahaluf LMS", email.From);
            mimeMessage.From.Add(from);
            //To
            MailboxAddress to = new MailboxAddress("User", email.to);
            mimeMessage.To.Add(to);
            //subject
            mimeMessage.Subject = "API Maessage";
            //body
            BodyBuilder bodyBuilder = new BodyBuilder();
            bodyBuilder.TextBody = "Hello , Welcome to Tahaluf LMS";
            // bodyBuilder.HtmlBody = "<h3>Dear </h3>"+to.Name+ "<p>Welcome to Tahaluf LMS</p> <p>Regards,</p> " + from.Name;
            mimeMessage.Body = bodyBuilder.ToMessageBody();

            //send
            using (var client = new SmtpClient())
            {
                //connect
                client.Connect("Smtp.gmail.com", 587, false);
                //validation
                client.Authenticate(email.From, email.password);
                //send 
                client.Send(mimeMessage);
                //disconnect
                client.Disconnect(true);
            }


            return true;

        }



    }
}
