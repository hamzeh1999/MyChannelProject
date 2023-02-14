using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class ContactUsService:IContactUsService
    {
        private readonly IContactUsRepository contactUsRepository;
        public ContactUsService(IContactUsRepository _contactUsRepository)
        {
            contactUsRepository = _contactUsRepository;
        }
        public List<Contact_Us> GETALLCONTACTUS()
        {
            return contactUsRepository.GETALLCONTACTUS();
        }
        public bool CREATECONTACTUS(Contact_Us contact)
        {
            return contactUsRepository.CREATECONTACTUS(contact);
        }
        public bool UPDATECONTACTUS(Contact_Us contact)
        {
            return contactUsRepository.UPDATECONTACTUS(contact);
        }

        public bool DELETECONTACTUS(int contacttId)
        {
            return contactUsRepository.DELETECONTACTUS(contacttId);
        }
       


    }
}
