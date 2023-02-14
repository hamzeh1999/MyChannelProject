using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

using Thl.MyChannel.core.common;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.Infra.Repository
{
    public class ChannelRepository : IChannelRepository
    {
        private readonly IDBContext DBContext;
        public ChannelRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }
        public bool CreateChannel(Channel channel)
        {
            var p = new DynamicParameters();
            p.Add("@Channelname_A", channel.ChannelName == null ? null : channel.ChannelName.ToLower(), dbType: DbType.String);
            p.Add("@Channeldate_A", channel.ChannelDate, dbType: DbType.DateTime);
            p.Add("@userID_A", channel.UserId, dbType: DbType.Int32);
            p.Add("@channelDescription_A", channel.ChannelDescription, dbType: DbType.String);
            p.Add("@ChanneImage_A", channel.ChannelImage, dbType: DbType.String);

            p.Add("@categoryid_A", channel.CategoryId, dbType: DbType.Int32);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Channel>("Channel_Package.CreateChannel", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DeleteChannel(int channelId)
        {
            var p = new DynamicParameters();
            p.Add("@ChannelID_A", channelId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Channel>("Channel_Package.DeleteChannel", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Channel> GetAllChannels()
        {
            
            IEnumerable<Channel> result = DBContext.Connection.Query<Channel>("Channel_Package.GetAllChannels", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<ChannelUserDTO> getChannelById(int channelId)
        {
            var p = new DynamicParameters();
            p.Add("@pchannelId", channelId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<ChannelUserDTO>("Channel_Package.getChannelByID", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }


        public List<ChannelSearchingDTO> SearchingChannel(ChannelSearchingCallDTO channel)
        {
            var p = new DynamicParameters();
            p.Add("@pchannelName", channel.pchannelName==null?null : channel.pchannelName.ToLower(), dbType: DbType.String);
            p.Add("@pdate_from", channel.pdate_from, dbType: DbType.DateTime);
            p.Add("@pdate_to", channel.pdate_to, dbType: DbType.DateTime);
            p.Add("@pcategoryName", channel.pcategoryName== null ? null : channel.pcategoryName.ToLower(), dbType: DbType.String);
            
            IEnumerable<ChannelSearchingDTO> result = DBContext.Connection.Query<ChannelSearchingDTO>("Channel_Package.SearchingChannel", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UpdateChannel(Channel channel)
        {
            var p = new DynamicParameters();
            p.Add("@ChannelID_A ", channel.ChannelId, dbType: DbType.Int32);
            p.Add("@Channelname_A", channel.ChannelName == null ? null : channel.ChannelName.ToLower(), dbType: DbType.String);
            p.Add("@Channeldate_A", channel.ChannelDate, dbType: DbType.DateTime);
            p.Add("@userID_A", channel.UserId, dbType: DbType.Int32);
            p.Add("@channelDescription_A", channel.ChannelDescription, dbType: DbType.String);
            p.Add("@categoryid_A", channel.CategoryId, dbType: DbType.Int32);
            p.Add("@ChanneImage_A", channel.ChannelImage, dbType: DbType.String);

            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Channel>("Channel_Package.UpdateChannel", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public List<VideoCounterDTO> videoscounter(int channelId)

        {
            var p = new DynamicParameters();
            p.Add("@pchannelid", channelId, dbType: DbType.Int32);
            IEnumerable<VideoCounterDTO> result = DBContext.Connection.Query<VideoCounterDTO>("Channel_Package.videoscounter", p,commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
       




        public List<Channel> getChannelByUserID(int userId)
        {
            var p = new DynamicParameters();
            p.Add("@pUserId  ", userId, dbType: DbType.Int32);
            IEnumerable<Channel> result = DBContext.Connection.Query<Channel>("Channel_Package.getChannelByUserID", p, commandType: CommandType.StoredProcedure);
            return result.ToList();

        }
        public List<Channel> SearchingChannelByCategoryId(int id)
        {
            var p = new DynamicParameters();
            p.Add("@categoryid_A  ", id, dbType: DbType.Int32);
            IEnumerable<Channel> result = DBContext.Connection.Query<Channel>("Channel_Package.SearchingChannelByCategoryId", p, commandType: CommandType.StoredProcedure);
            return result.ToList();

        }


    }
}
