using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.core.Repository
{
    public interface IAboutUsRepository
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

