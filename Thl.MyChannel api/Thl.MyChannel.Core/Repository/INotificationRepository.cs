using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;

namespace Thl.MyChannel.core.Repository
{
    public interface INotificationRepository
    {
        bool CREATENOTIFICATION(Notification_ notification_);
        bool UPDATENOTIFICATION(Notification_ notification_);
        bool DELETENOTIFICATION(int notificationId);
       List<Notification_> GETALLNOTIFICATION();
       List<BadReportTextDTO> GetBadReportTextOnChannel(int channelID);
    }
}
