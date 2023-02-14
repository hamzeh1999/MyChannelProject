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
    public class SubscribeService : ISubscribeService
    {
        private readonly ISubscribeRepository subscribeRepository;

        public SubscribeService(ISubscribeRepository _subscribeRepository)
        {
            subscribeRepository = _subscribeRepository;
        }
        public bool CREATESUBSCRIBE(Subscribe subscribe)
        {
            return subscribeRepository.CREATESUBSCRIBE(subscribe);
        }

        public bool DELETESUBSCRIBE(int SubscribeId)
        {
            return subscribeRepository.DELETESUBSCRIBE(SubscribeId);
        }

        public List<Subscribe> GETALLSUBSCRIBE()
        {
            return subscribeRepository.GETALLSUBSCRIBE();
        }

        public List<SubscribeChannelDTO> subsecibechannelcounter(int ChannelId)
        {
            return subscribeRepository.subsecibechannelcounter(ChannelId);
        }

        public bool UPDATESUBSCRIBE(Subscribe subscribe)
        {
            return subscribeRepository.UPDATESUBSCRIBE(subscribe);
        }
        public List<SubscribeEmailDTO> getEmailByChannelId (int ChannelId)
        {
            return subscribeRepository.getEmailByChannelId(ChannelId);
        }
    }
}
