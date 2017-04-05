using MazeZoom.Core.Profiling.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MazeZoom.Core.Profiling
{
    public class TempMemoryCollection
    {

        private List<Artifact> artifacts;
        public TempMemoryCollection()
        {
            this.artifacts = new List<Artifact>();
            string dateTime = "01/08/2008 14:50:50.42";
            DateTime dt = Convert.ToDateTime(dateTime);

            this.artifacts.Add(new Artifact(0, "Ships", dt, "http://i.imgur.com/WDxZOJA.jpg", Judgement.NONE));
            this.artifacts.Add(new Artifact(1, "Flying", dt, "http://i.imgur.com/y40a93x.jpg", Judgement.NONE));
            this.artifacts.Add(new Artifact(2, "FlyingShips", dt, "http://i.imgur.com/KO7EEHV.jpg", Judgement.NONE));
            this.artifacts.Add(new Artifact(3, "Skyline", dt, "http://i.imgur.com/GhrCuL0.jpg", Judgement.NONE));
            this.artifacts.Add(new Artifact(4, "Forest", dt, "http://i.imgur.com/JaPhMQV.jpg", Judgement.NONE));
            this.artifacts.Add(new Artifact(5, "Sea", dt, "http://i.imgur.com/ISpNf4j.jpg", Judgement.NONE));
            this.artifacts.Add(new Artifact(6, "Avalanche", dt, "http://i.imgur.com/zTWGL2V.jpg", Judgement.NONE));
            this.artifacts.Add(new Artifact(7, "MiniCity", dt, "http://i.imgur.com/DBpznrn.jpg", Judgement.NONE));
            this.artifacts.Add(new Artifact(8, "DrowningCity", dt, "http://i.imgur.com/GKvAvcn.jpg", Judgement.NONE));
            this.artifacts.Add(new Artifact(9, "Kites", dt, "http://i.imgur.com/JXvCtv4.jpg", Judgement.NONE));
        }

        public List<Artifact> Artifacts { get => artifacts; set => artifacts = value; }
    }
}
