import { Judgement } from "./judgement";

export class Artifact {
    constructor(public id: number, public name: string, public date: Date, public url: string, public judgement: Judgement) {
    }
}