using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

using Thl.MyChannel.core.common;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;

namespace Thl.MyChannel.Infra.Repository
{
    public class ContactUsRepository : IContactUsRepository
    {

        private readonly IDBContext DBContext;
        public ContactUsRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }



        public bool CREATECONTACTUS(Contact_Us contact)
        {
            var p = new DynamicParameters();
            p.Add("@pSubject", contact.Subject, dbType: DbType.String);
            p.Add("@pMessage", contact.Message, dbType: DbType.String);
            p.Add("@pEmail", contact.Email, dbType: DbType.String);
            p.Add("@pMap", contact.MapAddress, dbType: DbType.String);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Contact_Us>("CONTACTUS_PACKAGE.CREATECONTACTUS", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DELETECONTACTUS(int contactId)
        {
            var p = new DynamicParameters();
            p.Add("@pContactUsId", contactId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Contact_Us>("CONTACTUS_PACKAGE.DELETECONTACTUS", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Contact_Us> GETALLCONTACTUS()
        {
            IEnumerable<Contact_Us> result = DBContext.Connection.Query<Contact_Us>("CONTACTUS_PACKAGE.GETALLCONTACTUS", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UPDATECONTACTUS(Contact_Us contact)
        {
            var p = new DynamicParameters();
            p.Add("@pContactUsId", contact.ContactUsId, dbType: DbType.Int32);
            p.Add("@pSubject", contact.Subject, dbType: DbType.String);
            p.Add("@pMessage", contact.Message, dbType: DbType.String);
            p.Add("@pEmail", contact.Email, dbType: DbType.String);
            p.Add("@pMap", contact.MapAddress, dbType: DbType.String);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Contact_Us>("CONTACTUS_PACKAGE.UPDATECONTACTUS", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
    }
}
