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
    public class TestimonialRepository : ITestimonialRepository
    {
        private readonly IDBContext DBContext;
        public TestimonialRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }
        public bool CREATETESTIMONIAL(Testimonial testimonal)
        {
            var p = new DynamicParameters();
            p.Add("@pTestimonial_IMAGE", testimonal.TestimonialImage, dbType: DbType.String);
            p.Add("@pTestimonial_Text", testimonal.TestimonialText, dbType: DbType.String);
            p.Add("@puserId", testimonal.userId, dbType: DbType.Int32);

      // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
      var result = DBContext.Connection.Query<Testimonial>("Testimonial_PACKAGE.CREATETESTIMONIAL", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DELETETESTIMONIAL(int testimonalId)
        {
            var p = new DynamicParameters();
            p.Add("@pTestimonialId", testimonalId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Testimonial>("Testimonial_PACKAGE.DELETETESTIMONIAL", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Testimonial> GETALLTESTIMONIAL()
        {
            IEnumerable<Testimonial> result = DBContext.Connection.Query<Testimonial>("Testimonial_PACKAGE.GETALLTESTIMONIAL", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<Testimonial> GETTESTIMONIALBYID(int id)
        {
            var p = new DynamicParameters();
            p.Add("@pTestimonialId", id, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Testimonial>("Testimonial_PACKAGE.GETTESTIMONIALBYID", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        public List<Testimonial> getTestimonialByUserId(int userId)
        {
            var p = new DynamicParameters();
            p.Add("@pUserId", userId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Testimonial>("Testimonial_PACKAGE.getTestimonialByUserId", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UPDATETESTIMONIAL(Testimonial testimonal)
        {
            var p = new DynamicParameters();
            p.Add("@pTestimonialId", testimonal.TestimonialId, dbType: DbType.Int32);
            p.Add("@pTestimonial_IMAGE", testimonal.TestimonialImage, dbType: DbType.String);
            p.Add("@pTestimonial_Text", testimonal.TestimonialText, dbType: DbType.String);
            p.Add("@puserId", testimonal.userId, dbType: DbType.Int32);

      // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
      var result = DBContext.Connection.Query<Testimonial>("Testimonial_PACKAGE.UPDATETESTIMONIAL", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
    }
}
