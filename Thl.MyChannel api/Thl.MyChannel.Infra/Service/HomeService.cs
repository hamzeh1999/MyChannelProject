using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class HomeService: IHomeService
    {
        private readonly IHomeRepository homeRepository;

        public HomeService(IHomeRepository _homeRepository)
        {
            homeRepository = _homeRepository;
        }

        public List<Home> GETALLHOME()
        {
            return homeRepository.GETALLHOME();
        }
        public bool CREATEHOME(Home home)
        {
            return homeRepository.CREATEHOME(home);
        }
        public bool UPDATEHOME(Home home)
        {
            return homeRepository.UPDATEHOME(home);
        }
        public bool DELETEHOME(int homeId)
        {
            return homeRepository.DELETEHOME(homeId);
        }
    }
}
