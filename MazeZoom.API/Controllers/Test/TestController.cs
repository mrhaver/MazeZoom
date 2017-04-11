using MazeZoom.Core.Profiling;
using MazeZoom.Core.Profiling.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Xml.Linq;

/* reference
 * https://docs.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2
 */

namespace MazeZoom.API.Controllers.Test
{
    public class TestController : ApiController
    {
        private const string URL = "http://test2.adlibsoft.com/api/wwwopac.ashx";

        [Route("api/core/profiling/get/random-artifacts")]
        public List<Artifact> GetRandomArtifacts()
        {
            List<Artifact> artifacts = new List<Artifact>();
            string urlParameters = "?database=collect.inf&search=reproduction.reference>1 random 10";

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(URL);

            // Add an Accept header for JSON format.
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("text/xml"));

            // List data response.
            HttpResponseMessage response = client.GetAsync(urlParameters).Result;  // Blocking call!

            if (response.IsSuccessStatusCode)
            {
                XDocument myXmlDocument = XDocument.Load(URL + urlParameters);
                //myXmlDocument.Load(URL + urlParameters); //Load NOT LoadXml

                var records = ((myXmlDocument.Descendants("adlibXML")).Descendants("recordList")).Elements();

                foreach (var record in records)
                {
                    int id = 0;
                    string imageUrl = "";
                    string title = "";

                    foreach (var e in record.Elements())
                    {
                        //object image
                        if (e.Name.LocalName.Equals("reproduction.reference"))
                        {
                            imageUrl = GetImage(e.Value, "300", "300", "fit", "black");
                        }
                        //object title
                        if (e.Name.LocalName.Equals("title"))
                        {
                            title = e.Value;
                        }
                        //object creator
                        if (e.Name.LocalName.Equals("creator"))
                        {

                        }
                    }

                    string date = "01/08/2008";
                    DateTime dt = Convert.ToDateTime(date);

                    artifacts.Add(new Artifact(0, title, dt, imageUrl, Judgement.NONE));
                }
            }
            else
            {
                Console.WriteLine("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
            }

            return artifacts;
        }

        public string GetImage(string imgValue, string imgWidth, string imgHeight, string scaleMode, string canvasColor)
        {
            //create url parameters
            string urlParameters = "?command=getcontent";
            urlParameters += "&server=adlibimages";
            urlParameters += "&value=" + imgValue;
            urlParameters += "&width=" + imgWidth;
            urlParameters += "&height=" + imgHeight;
            urlParameters += "&scalemode=" + scaleMode;
            urlParameters += "&canvascolor=" + canvasColor;

            return URL + urlParameters;

        }

        [Route("api/core/profiling/getall")]
        public HttpResponseMessage GetArtifacts()
        {
            Profiler p = new Profiler();
            TempMemoryCollection tmc = new TempMemoryCollection();
            IEnumerable<Artifact> artifacts = tmc.Artifacts;
            return Request.CreateResponse<IEnumerable<Artifact>>(HttpStatusCode.OK, artifacts);
        }

        [Route("api/core/profiling/getallresults")]
        public HttpResponseMessage GetAllResults()
        {
            Profiler p = new Profiler();
            TempMemoryCollection tmc = new TempMemoryCollection();
            IEnumerable<Artifact> artifacts = tmc.Artifacts;
            return Request.CreateResponse<IEnumerable<Artifact>>(HttpStatusCode.OK, artifacts);
        }

        [Route("api/core/profiling/postjudge")]
        public HttpResponseMessage Post([FromBody]dynamic value)
        {
            String jsonString = Convert.ToString(value.artifacts);
            List<Artifact> artifacts = new List<Artifact>();
            JArray array = JArray.Parse(jsonString);
            foreach (JObject obj in array.Children<JObject>())
            {
                int id = Convert.ToInt32(obj["Id"]);
                String name = obj["Name"].ToString();
                DateTime date = Convert.ToDateTime(obj["Date"].ToString());
                String url = obj["Url"].ToString();
                Judgement judgement = (Judgement)Convert.ToInt32(obj["Judgement"]);
                Artifact artifact = new Artifact(id, name, date, url, judgement);
                artifacts.Add(artifact);
            }            
            return Request.CreateResponse<IEnumerable<Artifact>>(HttpStatusCode.OK, artifacts);
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
    }
}
