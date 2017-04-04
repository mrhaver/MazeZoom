using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace MazeZoom.Core.Profiling.Models
{
    public class Artifact
    {
        private int id;
        private string name;
        private DateTime date;
        private string url;
        private Judgement judgement;

        #region getters & setters

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public DateTime Date { get => date; set => date = value; }
        public string Url { get => url; set => url = value; }
        public Judgement Judgement { get => judgement; set => judgement = value; }

        #endregion

        #region constructors
        public Artifact(){}

        public Artifact(int id, string name, DateTime date, string url, Judgement judgement)
        {
            this.id = id;
            this.name = name;
            this.date = date;
            this.url = url;
            this.judgement = Judgement.NONE;
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
