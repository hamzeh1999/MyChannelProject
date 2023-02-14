using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Text;

namespace Thl.MyChannel.core.common
{
    public interface IDBContext
    {

        DbConnection Connection { 
            
            
            
            get;  }

    }
}
