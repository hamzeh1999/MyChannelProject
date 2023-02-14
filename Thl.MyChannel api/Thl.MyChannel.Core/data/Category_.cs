using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;


namespace Thl.MyChannel.core.data
{
    public class Category_
    {

        [Key]
        public int CategoryId { set; get; }
        public string CategoryName { set; get; }
        public string CategoryImage { set; get; }
        public string CategoryDescription { set; get; }

        public ICollection<Channel> channels { set; get; }
        public ICollection<Video> videos { set; get; }




    }
}
