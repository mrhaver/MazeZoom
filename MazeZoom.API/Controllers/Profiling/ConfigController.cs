using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MazeZoom.API.Controllers.Profiling
{
    public class ConfigController : ApiController
    {
        // GET: api/Config
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Config/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Config
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Config/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Config/5
        public void Delete(int id)
        {
        }
    }
}
