using System;
using System.Collections.Generic;
using System.Text;

using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.core.common;
using Dapper;
using System.Data;
using System.Linq;

namespace Thl.MyChannel.Infra.Repository
{
    public class NotificationRepository : INotificationRepository
    {

        private readonly IDBContext DBContext;
        public NotificationRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }



        public bool CREATENOTIFICATION(Notification_ notification_)
        {
            var p = new DynamicParameters();
            p.Add("@pNotificationText", notification_.NotificationText, dbType: DbType.String);
            p.Add("@pNotificationDate", notification_.NotificationDate, dbType: DbType.DateTime);
            p.Add("@pUserId", notification_.UserId, dbType: DbType.Int32);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Notification_>("NOTIFICATION_PACKAGE.CREATENOTIFICATION", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DELETENOTIFICATION(int notificationId)
        {
            var p = new DynamicParameters();
            p.Add("@pNotificationId", notificationId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Notification_>("NOTIFICATION_PACKAGE.DELETENOTIFICATION", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Notification_> GETALLNOTIFICATION()
        {
            IEnumerable<Notification_> result = DBContext.Connection.Query<Notification_>("NOTIFICATION_PACKAGE.GETALLNOTIFICATION", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<BadReportTextDTO> GetBadReportTextOnChannel(int channelID)
        {
            var p = new DynamicParameters();
            p.Add("@pchannelID", channelID, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<BadReportTextDTO>("NOTIFICATION_PACKAGE.GetBadReportTextOnChannel", p, commandType: CommandType.StoredProcedure);
            return result.ToList() ;
        }

        public bool UPDATENOTIFICATION(Notification_ notification_)
        {
            var p = new DynamicParameters();
            p.Add("@pNotificationId", notification_.NotificationId, dbType: DbType.Int32);
            p.Add("@pNotificationText", notification_.NotificationText, dbType: DbType.String);
            p.Add("@pNotificationDate", notification_.NotificationDate, dbType: DbType.DateTime);
            p.Add("@pUserId", notification_.UserId, dbType: DbType.Int32);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Liking>("NOTIFICATION_PACKAGE.UPDATENOTIFICATION", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
    }
}
