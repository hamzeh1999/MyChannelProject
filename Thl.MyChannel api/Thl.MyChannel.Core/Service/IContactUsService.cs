using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.Core.Service
{
    public  interface IContactUsService
    {

        public List<Contact_Us> GETALLCONTACTUS();
        public bool CREATECONTACTUS(Contact_Us contact);
        public bool UPDATECONTACTUS(Contact_Us contact);
        public bool DELETECONTACTUS(int contacttId);



    }
}
