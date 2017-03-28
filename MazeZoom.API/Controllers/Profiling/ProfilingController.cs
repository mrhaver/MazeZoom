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
            return new string[] {
                "http://i.imgur.com/WDxZOJA.jpg",
                "http://i.imgur.com/y40a93x.jpg",
                "http://i.imgur.com/KO7EEHV.jpg",
                "http://i.imgur.com/GhrCuL0.jpg",
                "http://i.imgur.com/JaPhMQV.jpg",
                "http://i.imgur.com/ISpNf4j.jpg",
                "http://i.imgur.com/zTWGL2V.jpg",
                "http://i.imgur.com/DBpznrn.jpg",
                "http://i.imgur.com/GKvAvcn.jpg",
                "http://i.imgur.com/JXvCtv4.jpg"
            };
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
