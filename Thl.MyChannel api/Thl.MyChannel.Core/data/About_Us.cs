using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;


namespace Thl.MyChannel.core.data
{
    public class About_Us
    {
       [Key]
        public int AboutUsId { set; get; }
        public string AboutUs_Text { set; get; }
        public string AboutUs_Text1 { set; get; }
        public string AboutUs_Text2 { set; get; }
        public string AboutUs_Text3 { set; get; }
        public string AboutUs_Image { set; get; }


        public ICollection<Home> homes { set; get; }

    }
}
