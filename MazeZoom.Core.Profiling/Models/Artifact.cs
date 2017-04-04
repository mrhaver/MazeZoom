using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace MazeZoom.Core.Profiling.Models
{
    public class Artifact
    {

        #region getters & setters

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Url { get; set; }
        public Judgement Judgement { get; set; }

        #endregion

        #region constructors
        public Artifact(){}

        public Artifact(int id, string name, DateTime date, string url, Judgement judgement)
        {
            this.Id = id;
            this.Name = name;
            this.Date = date;
            this.Url = url;
            this.Judgement = Judgement.NONE;
        }
        #endregion

        //TODO: return json object
        public string getJson()
        {
            string json = JsonConvert.SerializeObject(this);
            return json;
        }

    }
}
