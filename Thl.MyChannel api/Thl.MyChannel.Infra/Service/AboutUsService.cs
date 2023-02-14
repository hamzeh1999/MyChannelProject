using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class AboutUsService : IAboutUsService
    {
        private readonly IAboutUsRepository aboutUsRepository;

        public AboutUsService(IAboutUsRepository _aboutUsRepository)
        {
            aboutUsRepository = _aboutUsRepository;
        }
        public bool CREATEABOUTUS(About_Us about)
        {
            return aboutUsRepository.CREATEABOUTUS(about);
        }

        public bool DELETEABOUTUS(int id)
        {
            return aboutUsRepository.DELETEABOUTUS(id);
        }

        public List<About_Us> GETALLABOUTUS()
        {
            return aboutUsRepository.GETALLABOUTUS();
        }

        public bool UPDATEABOUTUS(About_Us about)
        {
            return aboutUsRepository.UPDATEABOUTUS(about);
        }
    }
}
