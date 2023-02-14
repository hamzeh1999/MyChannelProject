using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.core.Repository
{
    public interface IChannelRepository
    {
        bool CreateChannel(Channel channel);
        //read
        List<Channel> GetAllChannels();
        //update 
        bool UpdateChannel(Channel channel);
        //delete
        bool DeleteChannel(int channelId);
        public List<ChannelUserDTO> getChannelById(int channelId);


        List<ChannelSearchingDTO> SearchingChannel(ChannelSearchingCallDTO channel);
         List<VideoCounterDTO> videoscounter(int channelId);
        List<Channel> getChannelByUserID(int userId);
        public List<Channel> SearchingChannelByCategoryId(int id);




    }
}
