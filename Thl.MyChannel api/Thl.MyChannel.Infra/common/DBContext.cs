
using Microsoft.Extensions.Configuration;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Text;
using Thl.MyChannel.core.common;


namespace Thl.MyChannel.Infra.common
{
    public class DBContext: IDBContext
    {
        private DbConnection _connection;
        private readonly IConfiguration _confguration;



        public DBContext(IConfiguration confguration)
        {
            _confguration = confguration;
        }



        public DbConnection Connection
        {
            get
            {
                if (_connection == null)
                {



                    _connection = new OracleConnection(_confguration["ConnectionStrings:DBConnectionString"]);
                    _connection.Open();
                }
                else if (_connection.State != ConnectionState.Open)
                {










                    _connection.Open();
                }
                return _connection;
            }
        }
       


    }
}
