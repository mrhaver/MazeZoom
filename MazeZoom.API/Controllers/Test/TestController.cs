using MazeZoom.Core.Profiling;
using MazeZoom.Core.Profiling.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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

        [Route("api/core/profiling/getall")]
        public HttpResponseMessage GetArtifacts()
        {
            Profiler p = new Profiler();
            TempMemoryCollection tmc = new TempMemoryCollection();
            IEnumerable<Artifact> artifacts = tmc.Artifacts;

            HttpResponseMessage response = Request.CreateResponse<IEnumerable<Artifact>>(HttpStatusCode.OK, artifacts);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            return response;
        }

        [Route("api/core/profiling/getallresults")]
        public HttpResponseMessage GetAllResults()
        {
            Profiler p = new Profiler();
            TempMemoryCollection tmc = new TempMemoryCollection();
            IEnumerable<Artifact> artifacts = tmc.Artifacts;

            HttpResponseMessage response = Request.CreateResponse<IEnumerable<Artifact>>(HttpStatusCode.OK, artifacts);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            return response;
        }

        /*[Route("api/core/profiling/postjudge")]
        [HttpGet, HttpPost]
        public HttpResponseMessage Post([FromBody]string token)
        {
            HttpResponseMessage response = Request.CreateResponse<string>(HttpStatusCode.OK, token);
            HttpContent requestContent = Request.Content;
            string jsonContent = requestContent.ReadAsStringAsync().Result;


            response.Headers.Add("Access-Control-Allow-Origin", "*");
            return response;
        }*/

        [Route("api/core/profiling/postjudge")]
        [HttpPost]
        public String Post([FromBody]dynamic value)
        {
            //var x = value.artifacts; // JToken

            //String jsonString = Convert.ToString(value.artifacts);
            //dynamic results = JsonConvert.DeserializeObject<Artifact>(jsonString);

            /*String jsonString = Convert.ToString(value.artifacts);
         
            JArray array = JArray.Parse(jsonString);
            foreach (JObject obj in array.Children<JObject>())
            {
                int id = Convert.ToInt32(obj["id"]);
                String name = obj["name"].ToString();
                DateTime date = Convert.ToDateTime(obj["date"].ToString());
                String url = obj["url"].ToString();
                Judgement judgement = (Judgement)Convert.ToInt32(obj["judgement"]);

                new Artifact(id, name, date, url, judgement);
            }*/

            return Convert.ToString(value);
        }

        // GET: api/Profiling/5
        public IHttpActionResult Get(int id)
        {
            return Ok("value");
        }

        // PUT: api/Profiling/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Profiling/5
        public void Delete(int id)
        {
        }

/*
     [{
	"id": 1,
	"name": "test",
	"date": "01/08/2008 14:50:50.42",
	"url": "http://www.google.nl",
	"judgement": "Judgement.NONE"
    }]
*/
    }
}
