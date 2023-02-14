using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net.Mail;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.DTO;
using Thl.MyChannel.Core.Service;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;
using MimeKit;

namespace Thl.MyChannel.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BadReportController : ControllerBase
    {

        private readonly IBadReportService badReportService;
        public BadReportController(IBadReportService _badReportService)
        {
            badReportService = _badReportService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(BadReport_), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool CreateBadreport(BadReport_ bad)
        {
            return badReportService.CreateBadreport(bad);

        }


        [HttpGet]
        [ProducesResponseType(typeof(List<BadReport_>), StatusCodes.Status200OK)]
        public List<BadReport_> GetAllbadreports()
        {
            return badReportService.GetAllbadreports();
        }



        [HttpPut]
        [ProducesResponseType(typeof(BadReport_), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool UpdateBadreport([FromBody] BadReport_ bad)
        {
            return badReportService.UpdateBadreport(bad);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public  bool DeleteBadreport(int id)
        {
            return badReportService.DeleteBadreport(id);
        }

        [HttpGet]
        [Route("Getbadreport/{channelId}")]
        [ProducesResponseType(typeof(List<BadReport_>), StatusCodes.Status200OK)]
        public List<BadReport_> GetbadreportsOnChannel(int channelId)
        {
            return badReportService.GetbadreportsOnChannel(channelId);
        }

        [HttpGet]
        [Route("getEmailByChannelId/{channelId}")]
        [ProducesResponseType(typeof(List<BadReport_>), StatusCodes.Status200OK)]
        public List<BadReportEmailDTO> getEmailByChannelId(int channelId)
        {
            return badReportService.getEmailByChannelId(channelId);
        }






        

        [HttpPost]
        [Route("Email")]
        public bool Email([FromBody] Email email)
        { //message
            MimeMessage message = new MimeMessage();
            //sender--->from
            MailboxAddress from = new MailboxAddress("My Channel Website", email.From);

            //reciver--->to
            MailboxAddress to = new MailboxAddress("Report-Center", email.to);
            message.From.Add(from);
            message.To.Add(to);
            //subject
            message.Subject = "Bad Report on your Channel";
            BodyBuilder body = new BodyBuilder();

            body.HtmlBody = "<p> Dear My Channel'User , </p>" + "<h3>"+ email.reportText+"</h3>" + "Regards";




            message.Body = body.ToMessageBody();
            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, false); //true means use ssl (secure) , the email is the protocol email and his port number
                client.Authenticate(email.From, email.password);
                client.Send(message);
                client.Disconnect(true); //do disconnect after send

            }
            return true;

        }
    
    
    
    
    }
}
