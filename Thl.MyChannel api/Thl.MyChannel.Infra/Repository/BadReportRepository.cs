using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Thl.MyChannel.core.common;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.Infra.Repository
{
    public class BadReportRepository : IBadReportRepository
    {
        private readonly IDBContext DBContext;
        public BadReportRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }
        public bool CreateBadreport(BadReport_ bad)
        {
            var p = new DynamicParameters();
            p.Add("@reporttext_A", bad.ReportText, dbType: DbType.String);
            p.Add("@channelid_A", bad.ChannelId, dbType: DbType.Int32);

            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<BadReport_>("Badreport_Package.CreateBadreport", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DeleteBadreport(int id)
        {
            var p = new DynamicParameters();
            p.Add("@reportid_A", id, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<BadReport_>("Badreport_Package.DeleteBadreport", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<BadReport_> GetAllbadreports()
        {
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            //بستدعي البكج يلي بالداتابيز ك ليست
            IEnumerable<BadReport_> result = DBContext.Connection.Query<BadReport_>("Badreport_Package.GetAllbadreports", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<BadReport_> GetbadreportsOnChannel(int channelId)
        {
            var p = new DynamicParameters();
            p.Add("@channelid_A", channelId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<BadReport_>("Badreport_Package.GetbadreportsOnChannel", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }


        public List<BadReportEmailDTO> getEmailByChannelId(int channelId)
        {
            var p = new DynamicParameters();
            p.Add("@pchannelId", channelId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<BadReportEmailDTO>("Badreport_Package.getEmailByChannelId", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }


        public bool UpdateBadreport(BadReport_ bad)
        {
            var p = new DynamicParameters();
            p.Add("@reportid_A", bad.ReportId, dbType: DbType.Int32);
            p.Add("@reporttext_A", bad.ReportText, dbType: DbType.String);
            p.Add("@channelid_A", bad.ChannelId, dbType: DbType.Int32);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<BadReport_>("Badreport_Package.UpdateBadreport", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
    }
}
