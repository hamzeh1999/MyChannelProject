using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class HomeController : ControllerBase
  {
    private readonly IHomeService homeService;
    public HomeController(IHomeService _homeService)
    {
      homeService = _homeService;
    }


        [HttpPost]
        [Route("UploadImg")]
        public Home UploadImage()
        {
            try
            {
                var Image = Request.Form.Files[0];
                var ImageName = Guid.NewGuid().ToString() + "_" + Image.FileName;
                var FullPath = Path.Combine("C:\\Users\\user\\Desktop\\finalAnwar\\finalAnwar\\src\\assets\\img", ImageName);
                using (var stream = new FileStream(FullPath, FileMode.Create))
                {
                    Image.CopyTo(stream);
                }
                Home home = new Home();
                home.BackgroundImage = ImageName;
                return home;




            }
            catch
            {
                return null;
            }


        }

        [HttpPost]
        [Route("UploadImgLogo")]
        public Home UploadImageLogo()
        {
            try
            {
                var Image = Request.Form.Files[0];
                var ImageName = Guid.NewGuid().ToString() + "_+" + Image.FileName;
           
             var FullPath = Path.Combine("C:\\Users\\user\\Desktop\\finalAnwar\\finalAnwar\\src\\assets\\images", ImageName);
                using (var stream = new FileStream(FullPath, FileMode.Create))
                {
                    Image.CopyTo(stream);
                }
                Home home = new Home();
                home.Logo = ImageName;
                return home;




            }
            catch
            {
                return null;
            }


        }





        [HttpPost]
    [ProducesResponseType(typeof(Home), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public bool CREATEHOME([FromBody] Home home)
    {
      return homeService.CREATEHOME(home);

    }

    [HttpGet]
    [ProducesResponseType(typeof(List<Home>), StatusCodes.Status200OK)]
    public List<Home> GETALLHOME()
    {
      return homeService.GETALLHOME();
    }

    [HttpPut]
    [ProducesResponseType(typeof(Home), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]

    public bool UPDATEHOME([FromBody] Home home)
    {
      return homeService.UPDATEHOME(home);
    }

    [HttpDelete]
    [Route("Delete/{id}")]
    public bool DELETEHOME(int id)
    {
      return homeService.DELETEHOME(id);
    }

  }
}
