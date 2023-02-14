using System;
using System.Collections.Generic;
using System.Text;
using Thl.MyChannel.core.data;

namespace Thl.MyChannel.core.Repository
{
    public interface ICategoryRepository
    {
        bool CREATECATEGORY(Category_ category);
        //read
        List<Category_> GETALLCATEGORY();
        //update 
        bool UPDATECATEGORY(Category_ category);
        //delete
        bool DELETECATEGORY(int id);
        List<Category_> GETCATEGORYBYID(int id);


    }
}
