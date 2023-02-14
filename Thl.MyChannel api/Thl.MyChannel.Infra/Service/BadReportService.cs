using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.DTO;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class BadReportService : IBadReportService
    {
        private readonly IBadReportRepository badReportRepository;

        public BadReportService(IBadReportRepository _badReportRepository)
        {
            badReportRepository = _badReportRepository;
        }
        public bool CreateBadreport(BadReport_ bad)
        {
            return badReportRepository.CreateBadreport(bad);
        }
        public List<BadReportEmailDTO> getEmailByChannelId(int channelId)
        {
            return badReportRepository.getEmailByChannelId(channelId);
        }





        public bool DeleteBadreport(int id)
        {
            return badReportRepository.DeleteBadreport(id);
        }

        public List<BadReport_> GetAllbadreports()
        {
            return badReportRepository.GetAllbadreports();
        }

        public List<BadReport_> GetbadreportsOnChannel(int channelId)
        {
            return badReportRepository.GetbadreportsOnChannel(channelId);
        }

        public bool UpdateBadreport(BadReport_ bad)
        {
            return badReportRepository.UpdateBadreport(bad);
        }
    }
}
