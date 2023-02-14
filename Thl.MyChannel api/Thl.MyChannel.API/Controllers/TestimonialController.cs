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
    public class TestimonialController : ControllerBase
    {
        private readonly ITestimonialService testimonialService;
        public TestimonialController(ITestimonialService _testimonialService)
        {
            testimonialService = _testimonialService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(Testimonial), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool CREATETESTIMONIAL([FromBody] Testimonial testimonal)
        {
            return testimonialService.CREATETESTIMONIAL(testimonal);

        }


        [HttpGet]
        [ProducesResponseType(typeof(List<Testimonial>), StatusCodes.Status200OK)]
        public List<Testimonial> GETALLTESTIMONIAL()
        {
            return testimonialService.GETALLTESTIMONIAL();
        }


        [HttpPut]
        [ProducesResponseType(typeof(Testimonial), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public bool UPDATETESTIMONIAL([FromBody] Testimonial testimonal)
        {
            return testimonialService.UPDATETESTIMONIAL(testimonal);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public bool DELETETESTIMONIAL(int id)
        {
            return testimonialService.DELETETESTIMONIAL(id);
        }

        [HttpGet]
        [Route("GetTestimonialByID/{id}")]
        [ProducesResponseType(typeof(List<Testimonial>), StatusCodes.Status200OK)]
        public List<Testimonial> GETTESTIMONIALBYID(int id)
        {
            return testimonialService.GETTESTIMONIALBYID(id);
        }

        [HttpPost]
        [Route("UploadImg")]
        public Testimonial UploadImage()
        {
            try
            {
                var Image = Request.Form.Files[0];
                var ImageName = Guid.NewGuid().ToString() + "_" + Image.FileName;
                var FullPath = Path.Combine("C:\\Users\\user\\Desktop\\finalAnwar\\finalAnwar\\src\\assets\\images", ImageName);
                using (var stream = new FileStream(FullPath, FileMode.Create))
                {
                    Image.CopyTo(stream);
                }
                Testimonial testimonial = new Testimonial();
                testimonial.TestimonialImage = ImageName;
                return testimonial;
            }
            catch
            {
                return null;
            }


        }




        [HttpGet]
        [Route("getTestimonialByUserId/{userId}")]
        [ProducesResponseType(typeof(List<Testimonial>), StatusCodes.Status200OK)]
        public List<Testimonial> getTestimonialByUserId(int userId)
        {
            return testimonialService.getTestimonialByUserId(userId);
        }

    }
}
