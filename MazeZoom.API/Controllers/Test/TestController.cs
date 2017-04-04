using MazeZoom.Core.Profiling;
using MazeZoom.Core.Profiling.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

/* reference
 * https://docs.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2
 */

namespace MazeZoom.API.Controllers.Test
{
    public class TestController : ApiController
    {
        // GET: api/Test
        [Route("api/core/profiling/getartifacts")]
        public HttpResponseMessage Get()
        {
            Profiler p = new Profiler();
            TempMemoryCollection tmc = new TempMemoryCollection();
            IEnumerable<Artifact> artifacts = tmc.Artifacts;

            HttpResponseMessage response = Request.CreateResponse<IEnumerable<Artifact>>(HttpStatusCode.OK, artifacts);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            return response;
        }

        [Route("api/core/profiling/valuate/{artifactId}")]
        [HttpGet, HttpPost]
        public HttpResponseMessage ValuateArtifact(string artifactId)
        {
            return Request.CreateResponse<string>(HttpStatusCode.OK, artifactId);
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
