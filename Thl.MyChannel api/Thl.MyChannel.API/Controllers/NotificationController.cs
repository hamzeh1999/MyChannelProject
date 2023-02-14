using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using System.Collections.Generic;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.DTO;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class NotificationController : ControllerBase
  {
    private readonly INotificationService notificationService;
    public NotificationController(INotificationService _notificationService)
    {
      notificationService = _notificationService;
    }
    [HttpPost]
    [ProducesResponseType(typeof(Notification_), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public bool CREATENOTIFICATION([FromBody] Notification_ notification_)
    {
      return notificationService.CREATENOTIFICATION(notification_);

    }

    [HttpGet]
    [ProducesResponseType(typeof(List<Notification_>), StatusCodes.Status200OK)]
    public List<Notification_> GETALLNOTIFICATION()
    {
      return notificationService.GETALLNOTIFICATION();
    }

    [HttpPut]
    [ProducesResponseType(typeof(Notification_), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]

    public bool UPDATENOTIFICATION([FromBody] Notification_ notification_)
    {
      return notificationService.UPDATENOTIFICATION(notification_);
    }

    [HttpDelete]
    [Route("Delete/{id}")]
    public bool DELETENOTIFICATION(int id)
    {
      return notificationService.DELETENOTIFICATION(id);
    }
    [HttpGet]
    [Route("GetBadReportTextOnChannel/{id}")]
    [ProducesResponseType(typeof(List<BadReportTextDTO>), StatusCodes.Status200OK)]
    public List<BadReportTextDTO> GetBadReportTextOnChannel(int id)
    {
      return notificationService.GetBadReportTextOnChannel(id);
    }

      




    }
}
