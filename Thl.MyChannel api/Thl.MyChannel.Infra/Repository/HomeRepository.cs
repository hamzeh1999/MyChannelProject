using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Thl.MyChannel.core.common;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;

namespace Thl.MyChannel.Infra.Repository
{
    public class HomeRepository : IHomeRepository
    {
        private readonly IDBContext DBContext;
        public HomeRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }

        public bool CREATEHOME(Home home)
        {

            var p = new DynamicParameters();
            p.Add("@pLogo", home.Logo, dbType: DbType.String);
            p.Add("@pPhonenumber", home.PhoneNumber, dbType: DbType.Int32);
            p.Add("@pWebsiteName", home.WebsiteName, dbType: DbType.String);
            p.Add("@pBackgroundImage", home.BackgroundImage, dbType: DbType.String);
            p.Add("@pAddress", home.Address, dbType: DbType.String);
            p.Add("@pSocialMedia", home.Socialmedia, dbType: DbType.String);
            p.Add("@pDescription", home.Description_, dbType: DbType.String);
            p.Add("@pAboutUsId", home.AboutUsId, dbType: DbType.Int32);
            p.Add("@pContactUsId", home.ContactUsId, dbType: DbType.Int32);
      // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
      var result = DBContext.Connection.Query<Home>("HOME_PACKAGE.CREATEHOME", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DELETEHOME(int homeId)
        {
            var p = new DynamicParameters();
            p.Add("@pHomeId", homeId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Home>("HOME_PACKAGE.DELETEHOME", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Home> GETALLHOME()
        {
            IEnumerable<Home> result = DBContext.Connection.Query<Home>("HOME_PACKAGE.GETALLHOME", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UPDATEHOME(Home home)
        {
            var p = new DynamicParameters();
            p.Add("@pHomeId", home.HomeId, dbType: DbType.Int32);
            p.Add("@pLogo", home.Logo, dbType: DbType.String);
            p.Add("@pPhonenumber", home.PhoneNumber, dbType: DbType.Int32);
            p.Add("@pWebsiteName", home.WebsiteName, dbType: DbType.String);
            p.Add("@pAddress", home.Address, dbType: DbType.String);
            p.Add("@pBackgroundImage", home.BackgroundImage, dbType: DbType.String);
            p.Add("@pSocialMedia", home.Socialmedia, dbType: DbType.String);
            p.Add("@pDescription", home.Description_, dbType: DbType.String);
            p.Add("@pAboutUsId", home.AboutUsId, dbType: DbType.Int32);
            p.Add("@pContactUsId", home.ContactUsId, dbType: DbType.Int32);
      // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
      var result = DBContext.Connection.Query<Home>("HOME_PACKAGE.UPDATEHOME", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
    }
}
