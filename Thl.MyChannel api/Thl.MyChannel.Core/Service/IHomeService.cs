using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.Core.Service
{
    public interface IHomeService
    {

        public List<Home> GETALLHOME();
        public bool CREATEHOME(Home home);
        public bool UPDATEHOME(Home home);
        public bool DELETEHOME(int homeId);


    }
}
