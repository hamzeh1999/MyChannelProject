using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.DTO;
using Thl.MyChannel.Core.Service;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;
using MimeKit;

namespace Thl.MyChannel.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribeController : ControllerBase
    {
        private readonly ISubscribeService subscribeService;
        public SubscribeController(ISubscribeService _subscribeService)
        {
            subscribeService = _subscribeService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(Subscribe), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool CREATESUBSCRIBE([FromBody]Subscribe subscribe)
        {
            return subscribeService.CREATESUBSCRIBE(subscribe);

        }


        [HttpGet]
        [ProducesResponseType(typeof(List<Subscribe>), StatusCodes.Status200OK)]
        public List<Subscribe> GETALLSUBSCRIBE()
        {
            return subscribeService.GETALLSUBSCRIBE();
        }


        [HttpPut]
        [ProducesResponseType(typeof(Subscribe), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public bool UPDATEABOUTUS([FromBody]Subscribe subscribe)
        {
            return subscribeService.UPDATESUBSCRIBE(subscribe);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public bool DELETESUBSCRIBE(int id)
        {
            return subscribeService.DELETESUBSCRIBE(id);
        }
        [HttpGet]
        [Route("subsecibecounter/{id}")]
        [ProducesResponseType(typeof(List<SubscribeChannelDTO>), StatusCodes.Status200OK)]
        public List<SubscribeChannelDTO> subsecibechannelcounter(int id)
        {
            return subscribeService.subsecibechannelcounter(id);
        }

        [HttpGet]
        [Route("getEmailByChannelId/{ChannelId}")]
        [ProducesResponseType(typeof(List<SubscribeChannelDTO>), StatusCodes.Status200OK)]
        public List<SubscribeEmailDTO> getEmailByChannelId(int ChannelId)
        {

            return subscribeService.getEmailByChannelId(ChannelId);
        }





        [HttpPost]
        [Route("Email")]
        public bool Email([FromBody] Email email)
        { //message
            MimeMessage message = new MimeMessage();
            //sender--->from
            MailboxAddress from = new MailboxAddress("My Channel Website","hamzehgabashna@gmail.com");

            //reciver--->to
            MailboxAddress to = new MailboxAddress("Notification-Center", email.to );
            message.From.Add(from);
            message.To.Add(to);
            //subject
            message.Subject = "New Video Is Added 🎬 ";
            BodyBuilder body = new BodyBuilder();

            body.HtmlBody = "<p> Dear My Channel's User , </p>" + "<h3>" + "<p>There is a new video uploaded to your favorite channel,We Will Be Happy to see you there,Please don't be late</ p>" + "</h3>" + "Regards";




            message.Body = body.ToMessageBody();
            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, false); //true means use ssl (secure) , the email is the protocol email and his port number
                client.Authenticate("hamzehgabashna@gmail.com", "gabashna54321g");
                client.Send(message);
                client.Disconnect(true); //do disconnect after send

            }
            return true;

        }







    }
}
