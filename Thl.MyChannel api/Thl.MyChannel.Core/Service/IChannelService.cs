using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.Core.Service
{
    public interface IChannelService
    {
        bool CreateChannel(Channel channel);
        //read
        List<Channel> GetAllChannels();
        //update 
        bool UpdateChannel(Channel channel);
        //delete
        bool DeleteChannel(int channelId);

        List<ChannelSearchingDTO> SearchingChannel(ChannelSearchingCallDTO channel);
        List<VideoCounterDTO> videoscounter(int channelId);
        List<Channel> getChannelByUserID(int userId);
        List<Channel> SearchingChannelByCategoryId(int id);

        public List<ChannelUserDTO> getChannelById(int channelId);




    }
}
