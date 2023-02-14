using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using Thl.MyChannel.core.data;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutUsController : ControllerBase
    {
        private readonly IAboutUsService aboutUsService;
        public AboutUsController(IAboutUsService _aboutUsService)
        {
            aboutUsService = _aboutUsService;
        }



        [HttpPost]
        [Route("UploadImg")]
        public About_Us UploadImage()
        {
            try
            {
                var Image = Request.Form.Files[0];
                var ImageName = Guid.NewGuid().ToString() + "_" + Image.FileName;
                var FullPath = Path.Combine("D:\\finalVersion\\lastes folder\\lastesProject\\my channel anwar1\\New folder\\src\\assets\\images", ImageName);
                using (var stream = new FileStream(FullPath, FileMode.Create))
                {
                    Image.CopyTo(stream);
                }
                About_Us about = new About_Us();
                about.AboutUs_Image = ImageName;
                return about;




            }
            catch
            {
                return null;
            }


        }














        [HttpPost]
        [ProducesResponseType(typeof(About_Us), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool CREATEABOUTUS([FromBody]About_Us about)
        {
           return aboutUsService.CREATEABOUTUS(about);

        }


        [HttpGet]
        [ProducesResponseType(typeof(List<About_Us>), StatusCodes.Status200OK)]
        public List<About_Us> GETALLABOUTUS()
        {
            return aboutUsService.GETALLABOUTUS();
        }


        [HttpPut]
        [ProducesResponseType(typeof(About_Us), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public bool UPDATEABOUTUS([FromBody]About_Us about)
        {
            return aboutUsService.UPDATEABOUTUS(about);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public bool DELETEABOUTUS(int id)
        {
            return aboutUsService.DELETEABOUTUS(id);
        }
        


    }
}
