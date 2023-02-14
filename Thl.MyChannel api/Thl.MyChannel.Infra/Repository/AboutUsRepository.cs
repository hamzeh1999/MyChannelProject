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
    public class AboutUsRepository : IAboutUsRepository
    {
        private readonly IDBContext DBContext;
        public AboutUsRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }
        public bool CREATEABOUTUS(About_Us about)
        {
            var p = new DynamicParameters();
            p.Add("@pAboutUs_IMAGE", about.AboutUs_Image, dbType: DbType.String);
            p.Add("@pAboutUs_Text", about.AboutUs_Text, dbType: DbType.String);
            p.Add("@pAboutUs_Text1", about.AboutUs_Text1, dbType: DbType.String);
            p.Add("@pAboutUs_Text2", about.AboutUs_Text2, dbType: DbType.String);
            p.Add("@pAboutUs_Text3", about.AboutUs_Text3, dbType: DbType.String);

            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<About_Us>("ABOUTUS_PACKAGE.CREATEABOUTUS", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DELETEABOUTUS(int id)
        {
            var p = new DynamicParameters();
            p.Add("@pAboutUsId", id, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<About_Us>("ABOUTUS_PACKAGE.DELETEABOUTUS", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<About_Us> GETALLABOUTUS()
        {
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            //بستدعي البكج يلي بالداتابيز ك ليست
            IEnumerable<About_Us> result = DBContext.Connection.Query<About_Us>("ABOUTUS_PACKAGE.GETALLABOUTUS", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UPDATEABOUTUS(About_Us about)
        {
            var p = new DynamicParameters();
            p.Add("@pAboutUsId", about.AboutUsId, dbType: DbType.Int32);
            p.Add("@pAboutUs_IMAGE", about.AboutUs_Image, dbType: DbType.String);
            p.Add("@pAboutUs_Text", about.AboutUs_Text, dbType: DbType.String);
            p.Add("@pAboutUs_Text1", about.AboutUs_Text1, dbType: DbType.String);
            p.Add("@pAboutUs_Text2", about.AboutUs_Text2, dbType: DbType.String);
            p.Add("@pAboutUs_Text3", about.AboutUs_Text3, dbType: DbType.String);


            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<About_Us>("ABOUTUS_PACKAGE.UPDATEABOUTUS", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
    }
}
