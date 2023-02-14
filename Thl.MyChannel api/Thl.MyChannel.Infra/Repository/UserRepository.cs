using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.core.DTO;
using Thl.MyChannel.core.common;
using Dapper;
using System.Data;
using System.Linq;

namespace Thl.MyChannel.Infra.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IDBContext DBContext;
        public UserRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }
        public bool CREATEuser(User_ user)
        {
            var p = new DynamicParameters();
            p.Add("@pusername", user.UserName, dbType: DbType.String);
            p.Add("@puserimage", user.UserImage, dbType: DbType.String);
            p.Add("@puserage", user.UserAge, dbType: DbType.Int32);
            p.Add("@paddressuser", user.AddressUser, dbType: DbType.String);
            p.Add("@pregisterdate", user.RegisterDate, dbType: DbType.DateTime);
            p.Add("@pemail", user.Email, dbType: DbType.String);
            p.Add("@ppassword", user.Password_, dbType: DbType.String);
            p.Add("@proleid", user.roleId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<User_>("user_PACKAGE.CREATEuser", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DELETEuser(int userId)
        {
            var p = new DynamicParameters();
            p.Add("@puserId", userId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<User_>("user_PACKAGE.DELETEuser", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<User_> GETALLusers()
        {
            IEnumerable<User_> result = DBContext.Connection.Query<User_>("user_PACKAGE.GETALLusers", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<NumOfRegisterUserDTO> NumOfRegisterUsers()
        {
            IEnumerable<NumOfRegisterUserDTO> result = DBContext.Connection.Query<NumOfRegisterUserDTO>("user_PACKAGE.NumOfRegisterUsers", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public List<NumOfRegisterUserDTO> SearchingNumberOFUser(SearchingNumberOfUserCall date)
        {
            var p = new DynamicParameters();
            p.Add("@pdate_from", date.pdate_from==null? new DateTime(0000, 0, 0, 0, 00, 00): date.pdate_from, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("@pdate_to", date.pdate_to == null ? new DateTime(0000, 0, 0, 0, 00, 00) : date.pdate_to, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            IEnumerable<NumOfRegisterUserDTO> result = DBContext.Connection.Query<NumOfRegisterUserDTO>("user_PACKAGE.SearchingNumberOFUser", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool UPDATEuser(User_ user)
        {
            var p = new DynamicParameters();
            p.Add("@puserId", user.UserId, dbType: DbType.Int32);
            p.Add("@pusername", user.UserName, dbType: DbType.String);
            p.Add("@puserimage", user.UserImage, dbType: DbType.String);
            p.Add("@puserage", user.UserAge, dbType: DbType.Int32);
            p.Add("@paddressuser", user.AddressUser, dbType: DbType.String);
            p.Add("@pregisterdate", user.RegisterDate, dbType: DbType.DateTime);
            p.Add("@pemail", user.Email, dbType: DbType.String);
            p.Add("@ppassword", user.Password_, dbType: DbType.String);
            p.Add("@proleid", user.roleId, dbType: DbType.Int32);

            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<User_>("user_PACKAGE.UPDATEuser", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public UserLoginDTO UserLogin(UserLoginCallDTO user)
        {
            var p = new DynamicParameters();
            p.Add("@pemail", user.pemail, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("@pPASS", user.pPASS, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<UserLoginDTO> result = DBContext.Connection.Query<UserLoginDTO>("user_PACKAGE.UserLogin", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }
       public List<User_> GetUserById(int userId)
        {
            var p = new DynamicParameters();
            p.Add("@puserId", userId, dbType: DbType.Int32);
            IEnumerable<User_> result = DBContext.Connection.Query<User_>("user_PACKAGE.GetUserById", p, commandType: CommandType.StoredProcedure);
            return result.ToList() ;

        }

    }
}
