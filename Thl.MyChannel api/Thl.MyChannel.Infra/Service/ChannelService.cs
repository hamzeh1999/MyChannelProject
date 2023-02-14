using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.DTO;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class ChannelService : IChannelService
    {
        private readonly IChannelRepository channelRepository;

        public ChannelService(IChannelRepository _channelRepository)
        {
            channelRepository = _channelRepository;
        }
        public bool CreateChannel(Channel channel)
        {
            return channelRepository.CreateChannel(channel);
        }
        public List<ChannelUserDTO> getChannelById(int channelId)
        {
            return channelRepository.getChannelById(channelId);
        }

        public bool DeleteChannel(int channelId)
        {
            return channelRepository.DeleteChannel(channelId);
        }

        public List<Channel> GetAllChannels()
        {
            return channelRepository.GetAllChannels();
        }

        public List<ChannelSearchingDTO> SearchingChannel(ChannelSearchingCallDTO channel)
        {
            return channelRepository.SearchingChannel(channel);
        }

        public bool UpdateChannel(Channel channel)
        {
            return channelRepository.UpdateChannel(channel);
        }

        public List<VideoCounterDTO> videoscounter(int channelId)
        {
            return channelRepository.videoscounter(channelId);
        }
        public List<Channel> getChannelByUserID(int userId)
        {
            return channelRepository.getChannelByUserID(userId);

        }

        public List<Channel> SearchingChannelByCategoryId(int id )
        {
            return channelRepository.SearchingChannelByCategoryId(id);
        }





    }
}
