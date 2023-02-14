using System;
using System.Collections.Generic;
using System.Text;


namespace Thl.MyChannel.core.DTO
{
    public class BadReportTextDTO
    {
       public string ReportText { get; set; }   
       public int userID { set; get; }
       public string userName { set; get; }
       public int channelId { set; get; }
       public string channelName {  set; get; } 

    }
}
