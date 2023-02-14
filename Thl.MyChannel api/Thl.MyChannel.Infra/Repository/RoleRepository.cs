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
    public class RoleRepository : IRoleRepository
    {
        private readonly IDBContext DBContext;
        public RoleRepository(IDBContext _DBContext)
        {
            DBContext = _DBContext;
        }
        public bool CreateRole(Role_ role)
        {
            var p = new DynamicParameters();
            p.Add("@pposition_", role.Position_, dbType: DbType.String);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Role_>("Role_Package.CreateRole", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }

        public bool DeleteRole(int RoleId)
        {
            var p = new DynamicParameters();
            p.Add("@pRoleId", RoleId, dbType: DbType.Int32);
            var result = DBContext.Connection.Query<Role_>("Role_Package.DeleteRole", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Role_> ReadRole()
        {
            IEnumerable<Role_> result = DBContext.Connection.Query<Role_>("Role_Package.ReadRole", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }

        public bool updateRole(Role_ role)
        {
            var p = new DynamicParameters();
            p.Add("@pRoleId", role.RoleId, dbType: DbType.Int32);
            p.Add("@pposition_", role.Position_, dbType: DbType.String);
            // dbContext.Connection.Query<ClassName>("PackageName.ProcedureName" ,[parameter] ,CommandType: CommandType.StoredProcedure);
            var result = DBContext.Connection.Query<Role_>("Role_Package.updateRole", p, commandType: CommandType.StoredProcedure); // p is the dynamic parameter
            return true;
        }
    }
}
