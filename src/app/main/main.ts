// import { svgns } from "../api"
import { gsap } from "gsap";
import { ResumeComponent } from "../resume/resume.component";



export interface MainSetup {
    header : HTMLElement,
    dropdown : HTMLElement,
      
    menu : HTMLElement,
    menuExit : HTMLElement,

    gitBtn : HTMLElement,
    resumeBtn1 : HTMLElement,
    linkedInBtn1 : HTMLElement,

    jobBtn1 : HTMLElement
    jobBtn2 : HTMLElement
    jobBtn3 : HTMLElement

    jobTitle : HTMLElement
    jobP : HTMLElement
}

export class MainAPI {

    header : HTMLElement
    dropdown : HTMLElement
    
    menuBtn : HTMLElement
    menuExit : HTMLElement

    gitBtn : HTMLElement
    resumeBtn1 : HTMLElement
    linkedInBtn1 : HTMLElement

    gitURL : string = "https://github.com/leiah8"
    linkedInURL : string = "https://www.linkedin.com/in/leiah-nay/"

    jobBtn1 : HTMLElement
    jobBtn2 : HTMLElement
    jobBtn3 : HTMLElement

    jobTitle : HTMLElement
    jobP : HTMLElement

    job1Title : string = "Knowledgehook - Gamified Education Content Developer (Co-op)";
    job2Title : string = "Knowledgehook - Content Engineer Assistant (Co-op)";
    job3Title : string = "Schwartz/Reisman Centre - Lifeguard and Swim Instructor";

    job1P : string = "Developed math games in Angular using Typescript, HTML, and CSS, adaptable for various grade levels. Conducted useability testing sessions. Used Socket.io and other frameworks to collaboratively develop the backend of a multiplayer game."
    job2P : string = "Developed 12 interactive math tools using Angular to be used by students globally. Proposed alternative technical solutions to overcome design constraints and increase adaptability. Tested and conducted QA to create detailed bug tickets for projects developed by myself and coworkers. Leveraged GitHub to effectively synchronize and co-develop software projects with other engineers";
    job3P : string = "Communicated with children of various levels and ages, in both groups and private classes, on the techniques of various swimming strokes and skills"

    constructor(setup : MainSetup) {
        var self = this
        this.header = setup.header
        this.dropdown = setup.dropdown
        this.menuBtn = setup.menu
        this.menuExit = setup.menuExit

        this.gitBtn = setup.gitBtn
        this.resumeBtn1 = setup.resumeBtn1
        this.linkedInBtn1 = setup.linkedInBtn1

        this.jobBtn1 = setup.jobBtn1
        this.jobBtn2 = setup.jobBtn2
        this.jobBtn3 = setup.jobBtn3

        this.jobTitle = setup.jobTitle
        this.jobP = setup.jobP

        this.init()

        

    }

    init() {
        this.setupButtons()
        this.setupJobs()

        this.jobTitle.textContent = this.job1Title
        this.jobP.textContent = this.job1P

    }

    setupButtons() {
        var self = this

        gsap.set(self.dropdown, {visibility : "hidden"})
        this.menuBtn.onpointerdown = function() {
            console.log("hi")
            gsap.set(self.dropdown, {visibility : "visible"})
        }

        this.menuExit.onpointerdown = function() {
            console.log("hello")
            gsap.set(self.dropdown, {visibility : "hidden"})
        }

        this.gitBtn.onpointerdown = function() {
            window.open(self.gitURL)
        }

        this.linkedInBtn1.onpointerdown = function() {
            window.open(self.linkedInURL)
        }
        
    }

    setupJobs() {
        var self = this
        this.jobBtn1.onpointerdown = function() {
            self.jobTitle.textContent = self.job1Title
            self.jobP.textContent = self.job1P
            console.log("1")
        }

        this.jobBtn2.onpointerdown = function() {
            self.jobTitle.textContent = self.job2Title
            self.jobP.textContent = self.job2P
            console.log("2")
        }

        this.jobBtn3.onpointerdown = function() {
            self.jobTitle.textContent = self.job3Title
            self.jobP.textContent = self.job3P
            console.log("3")
        }
    }

}
