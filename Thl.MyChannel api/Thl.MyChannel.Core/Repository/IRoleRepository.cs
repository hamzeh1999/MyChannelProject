using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.core.Repository
{
    public interface IRoleRepository
    {
        bool CreateRole( Role_ role);
        bool updateRole(Role_ role);
        bool DeleteRole(int RoleId);
        List<Role_> ReadRole();



    }
}
