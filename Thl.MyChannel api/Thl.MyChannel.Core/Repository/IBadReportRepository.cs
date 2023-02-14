using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.DTO;

namespace Thl.MyChannel.core.Repository
{
    public interface IBadReportRepository
    {
        bool CreateBadreport(BadReport_ bad);
        //read
        List<BadReport_> GetAllbadreports();
        //update 
        bool UpdateBadreport(BadReport_ bad);
        //delete
        bool DeleteBadreport(int id);
         List<BadReportEmailDTO> getEmailByChannelId(int channelId);

        List<BadReport_> GetbadreportsOnChannel(int channelId);

    }
}
