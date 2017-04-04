import { Judgement } from "./judgement";

export class Artifact {
    constructor(public Id: number, public Name: string, public Date: Date, public Url: string, public Judgement: Judgement) {
    }
}