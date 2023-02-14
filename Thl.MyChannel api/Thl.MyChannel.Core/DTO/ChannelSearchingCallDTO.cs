using System;
using System.Collections.Generic;
using System.Text;

namespace Thl.MyChannel.core.DTO
{
    public class ChannelSearchingCallDTO
    {

        public string pchannelName { get; set; } 
        public DateTime? pdate_from { get; set; }
        public DateTime? pdate_to { get; set; }
        public string pcategoryName { get; set; }

    }
}
