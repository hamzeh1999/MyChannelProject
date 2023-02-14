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
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.Infra.Repository
{
    public class SubscribeRepository : ISubscribeRepository
    {
        private readonly IDBContext DBContext;
        public SubscribeRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }
        public bool CREATESUBSCRIBE(Subscribe subscribe)
        {
            var p = new DynamicParameters();
            p.Add("@pIncomes", subscribe.Incomes, dbType: DbType.Double);
            p.Add("@pChannelid", subscribe.channelId, dbType: DbType.Int32);
            p.Add("@pUserId", subscribe.userId, dbType: DbType.Int32);
            p.Add("@pSubscribeChannel", subscribe.SubscribeChannel, dbType: DbType.String);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Subscribe>("SUBSCRIBE_PACKAGE.CREATESUBSCRIBE", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DELETESUBSCRIBE(int SubscribeId)
        {
            var p = new DynamicParameters();
            p.Add("@pSubscribeId", SubscribeId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Subscribe>("SUBSCRIBE_PACKAGE.DELETESUBSCRIBE", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Subscribe> GETALLSUBSCRIBE()
        {
            IEnumerable<Subscribe> result = DBContext.Connection.Query<Subscribe>("SUBSCRIBE_PACKAGE.GETALLSUBSCRIBE", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
       


        public List<SubscribeChannelDTO> subsecibechannelcounter(int ChannelId)
        {
            var p = new DynamicParameters();
            p.Add("@pchannelid", ChannelId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<SubscribeChannelDTO> result = DBContext.Connection.Query<SubscribeChannelDTO>("SUBSCRIBE_PACKAGE.subsecibechannelcounter", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        public List<SubscribeEmailDTO> getEmailByChannelId(int ChannelId)
        {
            var p = new DynamicParameters();
            p.Add("@pChannelId", ChannelId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<SubscribeEmailDTO> result = DBContext.Connection.Query<SubscribeEmailDTO>("SUBSCRIBE_PACKAGE.getEmailByChannelId", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        public bool UPDATESUBSCRIBE(Subscribe subscribe)
        {
            var p = new DynamicParameters();
            p.Add("@pSubscribeId", subscribe.SubscribeId, dbType: DbType.Int32);
            p.Add("@pIncomes", subscribe.Incomes, dbType: DbType.Double);
            p.Add("@pChannelid", subscribe.channelId, dbType: DbType.Int32);
            p.Add("@pUserId", subscribe.userId, dbType: DbType.Int32);

            p.Add("@pSubscribeChannel", subscribe.SubscribeChannel, dbType: DbType.String);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Subscribe>("SUBSCRIBE_PACKAGE.UPDATESUBSCRIBE", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
    }
}
