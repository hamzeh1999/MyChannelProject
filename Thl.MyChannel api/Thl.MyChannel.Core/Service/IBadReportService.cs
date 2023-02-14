using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.Core.Service
{
    public interface IBadReportService
    {
        bool CreateBadreport(BadReport_ bad);
        //read
        List<BadReport_> GetAllbadreports();
        //update 
        bool UpdateBadreport(BadReport_ bad);
        //delete
         List<BadReportEmailDTO> getEmailByChannelId(int channelId);

        bool DeleteBadreport(int id);
        List<BadReport_> GetbadreportsOnChannel(int channelId);
      

    }
}
