using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.Core.Service
{
    public interface IAboutUsService
    {
        bool CREATEABOUTUS(About_Us about);
        //read
        List<About_Us> GETALLABOUTUS();
        //update 
        bool UPDATEABOUTUS(About_Us about);
        //delete
        bool DELETEABOUTUS(int id);
    }
}
