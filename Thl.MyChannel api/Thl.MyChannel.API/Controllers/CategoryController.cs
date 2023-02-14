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
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService categoryService;
        public CategoryController(ICategoryService _categoryService)
        {
            categoryService = _categoryService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(Category_), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public bool CREATECATEGORY([FromBody] Category_ category)
        {
            return categoryService.CREATECATEGORY(category);    

        }


        [HttpGet]
        [ProducesResponseType(typeof(List<Category_>), StatusCodes.Status200OK)]
        public List<Category_> GETALLCATEGORY()
        {
            return categoryService.GETALLCATEGORY();
        }


        [HttpPost]
        [Route("UploadImg")]
        public Category_ UploadImage()
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
                Category_ categry = new Category_();
                categry.CategoryImage = ImageName;
                return categry;




            }
            catch
            {
                return null;
            }


        }




        [HttpPut]
        [ProducesResponseType(typeof(Category_), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public bool UPDATECATEGORY([FromBody]Category_ category)
        {
            return categoryService.UPDATECATEGORY(category);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public bool DELETECATEGORY(int id)
        {
            return categoryService.DELETECATEGORY(id);
        }
    }
}
