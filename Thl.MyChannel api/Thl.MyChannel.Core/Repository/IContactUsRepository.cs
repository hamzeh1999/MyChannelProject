using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.core.Repository
{
    public interface IContactUsRepository
    {


        bool CREATECONTACTUS(Contact_Us contact);
        bool UPDATECONTACTUS(Contact_Us contact);
        bool DELETECONTACTUS (int contactId);
        List<Contact_Us> GETALLCONTACTUS();

    }
}
