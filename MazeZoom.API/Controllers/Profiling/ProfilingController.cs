using MazeZoom.Core.Profiling;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MazeZoom.API.Controllers.Profiling
{
    public class ProfilingController : ApiController
    {
        // GET: api/Profiling
        public IEnumerable<string> Get()
        {
            Profiler p = new Profiler();
            return p.GetItems();
        }

        // GET: api/Profiling/5
        public IHttpActionResult Get(int id)
        {
            return Ok("value");
        }

        // POST: api/Profiling
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Profiling/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Profiling/5
        public void Delete(int id)
        {
        }
    }
}
