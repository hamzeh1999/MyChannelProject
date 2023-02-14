using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public  class NotificationService: INotificationService
    {
        private readonly INotificationRepository notificationRepository;
        public NotificationService(INotificationRepository _notificationRepository)
        {
            notificationRepository = _notificationRepository;
        }
        public bool CREATENOTIFICATION(Notification_ notification_)
        {
            return notificationRepository.CREATENOTIFICATION(notification_);
        }

        public bool DELETENOTIFICATION(int notificationId)
        {
            return notificationRepository.DELETENOTIFICATION(notificationId);

        }


        public List<Notification_> GETALLNOTIFICATION()
        {
            return notificationRepository.GETALLNOTIFICATION();
        }

         public List<BadReportTextDTO> GetBadReportTextOnChannel(int channelID)
        {
            return notificationRepository.GetBadReportTextOnChannel(channelID);
        }

         public bool UPDATENOTIFICATION(Notification_ notification_)
        {
            return notificationRepository.UPDATENOTIFICATION(notification_);
        }

    }
}
