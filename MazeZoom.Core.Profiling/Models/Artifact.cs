using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace MazeZoom.Core.Profiling.Models
{
    class Artifact
    {
        private int id;
        private string name;
        private DateTime date;
        private string url;
        private Boolean judgement;

        #region getters & setters
        public string getName()
        {
            return this.name;
        }

        public void setName(string name)
        {
            this.name = name;
        }

        public DateTime getDate()
        {
            return this.date;
        }

        public void setDate(DateTime date)
        {
            this.date = date;
        }

        public string getUrl()
        {
            return this.url;
        }

        public void setUrl(string url)
        {
            this.url = url;
        }

        #endregion

        #region constructors
        public Artifact(){}

        public Artifact(int id, string name, DateTime date, string url, Boolean judgement)
        {
            this.id = id;
            this.name = name;
            this.date = date;
            this.url = url;
            this.judgement = judgement;
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
