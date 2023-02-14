using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;

namespace Thl.MyChannel.Core.Service
{
    public interface INotificationService
    {

        public bool CREATENOTIFICATION(Notification_ notification_);
        public bool DELETENOTIFICATION(int notificationId);
        public List<Notification_> GETALLNOTIFICATION();
        public List<BadReportTextDTO> GetBadReportTextOnChannel(int channelID);
        public bool UPDATENOTIFICATION(Notification_ notification_);


    }
}
