using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.Core.Service
{
    public interface ISubscribeService
    {
        bool CREATESUBSCRIBE(Subscribe subscribe);
        bool UPDATESUBSCRIBE(Subscribe subscribe);
        bool DELETESUBSCRIBE(int SubscribeId);
        List<Subscribe> GETALLSUBSCRIBE();
        List<SubscribeChannelDTO> subsecibechannelcounter(int ChannelId);
        public List<SubscribeEmailDTO> getEmailByChannelId(int ChannelId);
    }
}
