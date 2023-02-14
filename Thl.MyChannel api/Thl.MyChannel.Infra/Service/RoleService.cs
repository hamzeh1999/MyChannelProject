using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
   
    public class RoleService : IRoleService
    {
        private readonly IRoleRepository roleRepository;

        public RoleService(IRoleRepository _roleRepository)
        {
            roleRepository = _roleRepository;
        }
        public bool CreateRole(Role_ role)
        {
            return roleRepository.CreateRole(role);
        }

        public bool DeleteRole(int RoleId)
        {
            return roleRepository.DeleteRole(RoleId);
        }

        public List<Role_> ReadRole()
        {
            return roleRepository.ReadRole();
        }

        public bool updateRole(Role_ role)
        {
            return roleRepository.updateRole(role);
        }
    }
}
