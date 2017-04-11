using MazeZoom.Core.Profiling;
using MazeZoom.Core.Profiling.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MazeZoom.API.Controllers.Profiling
{
    public class RandomArtifactController : ApiController
    {
        // GET: api/RandomArtifact
        public IEnumerable<Artifact> Get()
        {
            TempMemoryCollection tmc = new TempMemoryCollection();
            int numItems = int.Parse(ConfigHandler.Get("NumReturnedItems"));
            return tmc.Artifacts.Take(numItems);
        }

        // GET: api/RandomArtifact/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/RandomArtifact
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/RandomArtifact/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/RandomArtifact/5
        public void Delete(int id)
        {
        }
    }
}
