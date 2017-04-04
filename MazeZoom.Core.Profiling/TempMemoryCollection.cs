using System;
using System.Collections.Generic;
using System.Text;
using MazeZoom.Core.Profiling.Models;

namespace MazeZoom.Core.Profiling
{
    class TempMemoryCollection
    {
        private static TempMemoryCollection instance;

        private List<Artifact> artifacts;
        public TempMemoryCollection()
        {
            string dateTime = "01/08/2008 14:50:50.42";
            DateTime dt = Convert.ToDateTime(dateTime);

            this.artifacts.Add(new Artifact(0, "0", dt, "http://i.imgur.com/WDxZOJA.jpg", false));
            this.artifacts.Add(new Artifact(1, "1", dt, "http://i.imgur.com/y40a93x.jpg", false));
            this.artifacts.Add(new Artifact(2, "2", dt, "http://i.imgur.com/KO7EEHV.jpg", false));
            this.artifacts.Add(new Artifact(3, "3", dt, "http://i.imgur.com/GhrCuL0.jpg", false));
            this.artifacts.Add(new Artifact(4, "4", dt, "http://i.imgur.com/JaPhMQV.jpg", false));
            this.artifacts.Add(new Artifact(5, "5", dt, "http://i.imgur.com/ISpNf4j.jpg", false));
            this.artifacts.Add(new Artifact(6, "6", dt, "http://i.imgur.com/zTWGL2V.jpg", false));
            this.artifacts.Add(new Artifact(7, "7", dt, "http://i.imgur.com/DBpznrn.jpg", false));
            this.artifacts.Add(new Artifact(8, "8", dt, "http://i.imgur.com/GKvAvcn.jpg", false));
            this.artifacts.Add(new Artifact(9, "9", dt, "http://i.imgur.com/JXvCtv4.jpg", false));
        }

        public static TempMemoryCollection Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new TempMemoryCollection();
                }
                return instance;
            }
        }
    }
}
