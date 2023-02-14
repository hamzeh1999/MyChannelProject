using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace Thl.MyChannel.core.data
{
    public class Home
    {

        [Key]
        public int HomeId { set; get; }
        public string Logo { set; get; }

       // public string CategoryName { set; get; }
        public int PhoneNumber { set; get; }
        public string WebsiteName { set; get; }
        public string BackgroundImage { set; get; }
        public string Address { set; get; }
        public string Socialmedia { set; get; }
        public string Description_ { set; get; }
        public int? ContactUsId { set; get; }
        public int? AboutUsId { set; get; }

        [ForeignKey("ContactUsId")]
        public virtual Contact_Us contactUs { get; set; }


        [ForeignKey("AboutUsId")]
        public virtual About_Us aboutUs { get; set; }







    }
}
