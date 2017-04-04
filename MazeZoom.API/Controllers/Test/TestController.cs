using MazeZoom.Core.Profiling;
using MazeZoom.Core.Profiling.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MazeZoom.API.Controllers.Test
{
    public class TestController : ApiController
    {
        // GET: api/Test
        public IEnumerable<Artifact> Get()
        {
            Profiler p = new Profiler();
            TempMemoryCollection tmc = new TempMemoryCollection();
            IEnumerable<Artifact> artifacts = tmc.Artifacts; 
            
            return artifacts;
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
