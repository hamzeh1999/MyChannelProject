using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.core.Repository
{
    public interface IHomeRepository
    {
        List<Home> GETALLHOME();
        bool CREATEHOME(Home home);
        bool UPDATEHOME(Home home);
        bool DELETEHOME(int homeId);



    }
}
