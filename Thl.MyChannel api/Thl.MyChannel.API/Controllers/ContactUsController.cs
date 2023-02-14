using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ContactUsController : ControllerBase
  {
    private readonly IContactUsService contactUsService;
    public ContactUsController(IContactUsService _contactUsService)
    {
      contactUsService = _contactUsService;
    }
    [HttpPost]
    [ProducesResponseType(typeof(Contact_Us), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public bool CREATECONTACTUS([FromBody] Contact_Us contact_us)
    {
      return contactUsService.CREATECONTACTUS(contact_us);

    }

    [HttpGet]
    [ProducesResponseType(typeof(List<Contact_Us>), StatusCodes.Status200OK)]
    public List<Contact_Us> GETALLCONTACTUS()
    {
      return contactUsService.GETALLCONTACTUS();
    }

    [HttpPut]
    [ProducesResponseType(typeof(Contact_Us), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]

    public bool UPDATECONTACTUS([FromBody] Contact_Us contact_us)
    {
      return contactUsService.UPDATECONTACTUS(contact_us);
    }

    [HttpDelete]
    [Route("Delete/{id}")]
    public bool DELETECONTACTUS(int id)
    {
      return contactUsService.DELETECONTACTUS(id);
    }

    
  }
}
