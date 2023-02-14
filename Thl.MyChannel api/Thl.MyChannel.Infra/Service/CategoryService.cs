using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;
using Thl.MyChannel.core.Repository;
using Thl.MyChannel.Core.Service;

namespace Thl.MyChannel.Infra.Service
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository categoryRepository;

        public CategoryService(ICategoryRepository _categoryRepository)
        {
            categoryRepository = _categoryRepository;
        }
        public bool CREATECATEGORY(Category_ category)
        {
            return categoryRepository.CREATECATEGORY(category);
        }

        public bool DELETECATEGORY(int id)
        {
            return categoryRepository.DELETECATEGORY(id);
        }

        public List<Category_> GETALLCATEGORY()
        {
            return categoryRepository.GETALLCATEGORY();
        }

        public bool UPDATECATEGORY(Category_ category)
        {
            return categoryRepository.UPDATECATEGORY(category);
        }
        public List<Category_> GETCATEGORYBYID(int id)
        {
            return categoryRepository.GETCATEGORYBYID(id);
        }
    }
}
