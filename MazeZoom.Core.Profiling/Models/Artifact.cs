using System;
using System.Collections.Generic;
using System.Text;

namespace MazeZoom.Core.Profiling.Models
{
    class Artifact
    {
        private string name;
        private DateTime date;
        private string url;

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

        public Artifact(string name, DateTime date, string url)
        {
            this.name = name;
            this.date = date;
            this.url = url;
        }
        #endregion


    }
}
