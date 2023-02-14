using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly IRoleService roleService;
        public RoleController(IRoleService _roleService)
        {
            roleService = _roleService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(Role_), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool CreateRole([FromBody]Role_ role)
        {
            return roleService.CreateRole(role);

        }


        [HttpGet]
        [ProducesResponseType(typeof(List<Role_>), StatusCodes.Status200OK)]
        public List<Role_> ReadRole()
        {
            return roleService.ReadRole();
        }


        [HttpPut]
        [ProducesResponseType(typeof(Role_), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool updateRole([FromBody] Role_ role)
        {
            return roleService.updateRole(role);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public bool DeleteRole(int id)
        {
            return roleService.DeleteRole(id);
        }

    }
}
