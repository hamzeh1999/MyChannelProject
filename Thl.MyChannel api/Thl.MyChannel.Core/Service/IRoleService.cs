using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.Core.Service
{
    public interface IRoleService
    {
        bool CreateRole(Role_ role);
        bool updateRole(Role_ role);
        bool DeleteRole(int RoleId);
        List<Role_> ReadRole();
    }
}
