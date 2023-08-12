// import { svgns } from "../api"
import { gsap } from "gsap";



export interface MainSetup {
    dropdown : HTMLElement,
      
    menu : HTMLElement,
    menuExit : HTMLElement,
    // emailBtn : HTMLElement,

    jobBtn1 : HTMLElement
    jobBtn2 : HTMLElement
    jobBtn3 : HTMLElement

    jobTitle : HTMLElement
    jobP : HTMLElement
    jobDate : HTMLElement
}

export class MainAPI {

    dropdown : HTMLElement
    
    menuBtn : HTMLElement
    menuExit : HTMLElement
    // emailBtn : HTMLElement
    emailShowing : boolean


    jobBtn1 : HTMLElement
    jobBtn2 : HTMLElement
    jobBtn3 : HTMLElement

    jobTitle : HTMLElement
    jobP : HTMLElement
    jobDate : HTMLElement

    job1Title : string = "Knowledgehook - Gamified Education Content Developer";
    job2Title : string = "Knowledgehook - Content Engineer Assistant";
    job3Title : string = "Hatch Coding - Coding Coach";

    jobDate1 : string = "May 2023 - August 2023"
    jobDate2 : string = "May 2022 - August 2022"
    jobDate3 : string = "March 2021 - August 2021"

    job1P : string = "<li> Developed four mini-games in Angular using Typescript, HTML and CSS </li>" +
        "<li> Designed adaptable games that can be utilized by multiple grade levels </li>" +
        "<li> Conducted testing and quality assurance, including numerous usability testing sessions with colleagues </li>" +
        "<li> Utilized Socket.io to develop the base server-client architecture for a multiplayer game </li>" +
        "<li> Leveraged GitHub to effectively synchronize and co-develop software projects with other engineers </li>"
    
    
    job2P : string = "<li> Developed 12 interactive math tools using Angular that have been used by students globally </li>" +
        "<li> Proposed alternative technical solutions to overcome design constraints and increase adaptability </li>" +
        "<li> Collaborated with educators and fellow developers to design interactive math questions for students of varying levels and ages </li>" +
        "<li> Tested and conducted QA to create detailed bug tickets for projects developed by myself and coworkers </li>"
    
    job3P : string = "<li> Taught children of various ages, in both teams and one-on-one situations, coding principles in JavaScript and Python </li>" + 
        "<li> Discovered and debugged numerous problems in students’ projects, often analyzing over a thousand lines of code </li>" 

    constructor(setup : MainSetup) {
        var self = this
        this.dropdown = setup.dropdown
        this.menuBtn = setup.menu
        this.menuExit = setup.menuExit

        // this.emailBtn = setup.emailBtn
        this.emailShowing = false;

      
        this.jobBtn1 = setup.jobBtn1
        this.jobBtn2 = setup.jobBtn2
        this.jobBtn3 = setup.jobBtn3

        this.jobTitle = setup.jobTitle
        this.jobP = setup.jobP
        this.jobDate = setup.jobDate

        this.init()

        

    }

    init() {
        this.setupButtons()
        this.setupJobs()

        this.jobTitle.textContent = this.job1Title
        this.jobP.innerHTML = this.job1P
        this.jobDate.textContent = this.jobDate1

    }

    setupButtons() {
        var self = this

        gsap.set(self.dropdown, {visibility : "hidden"})
        this.menuBtn.onpointerdown = function() {
            gsap.set(self.dropdown, {visibility : "visible"})
        }

        this.menuExit.onpointerdown = function() {
            gsap.set(self.dropdown, {visibility : "hidden"})
        }
        
    }

    setupJobs() {
        var self = this
        var tl = gsap.timeline()
        var time = 0.3

        this.jobBtn1.innerHTML = "<p>Knowledgehook <br> Gamified Education Content Developer</p>" //self.job1Title
        this.jobBtn1.onpointerdown = function() {
            tl.clear()
            tl.to([self.jobTitle, self.jobP, self.jobDate], {opacity : 0, duration : time, onComplete : function() {
                self.jobTitle.textContent = self.job1Title
                self.jobP.innerHTML = self.job1P
                self.jobDate.textContent = self.jobDate1
            }})
            tl.to([self.jobTitle, self.jobP, self.jobDate], {opacity : 1, duration : time})
            
        }

        this.jobBtn2.innerHTML = "<p>Knowledgehook <br> Content Engineer Assistant</p>" //self.job2Title
        this.jobBtn2.onpointerdown = function() {
            tl.clear()
            tl.to([self.jobTitle, self.jobP, self.jobDate], {opacity : 0, duration : time, onComplete : function() {
                self.jobTitle.textContent = self.job2Title
                self.jobP.innerHTML = self.job2P
                self.jobDate.textContent = self.jobDate2
            }})
            tl.to([self.jobTitle, self.jobP, self.jobDate], {opacity : 1, duration : time})
        }

        this.jobBtn3.innerHTML = "<p>Hatch Coding <br> Coding Coach</p>" //self.job3Title
        this.jobBtn3.onpointerdown = function() {
            tl.clear()
            tl.to([self.jobTitle, self.jobP, self.jobDate], {opacity : 0, duration : time, onComplete : function() {
                self.jobTitle.textContent = self.job3Title
                self.jobP.innerHTML = self.job3P
                self.jobDate.textContent = self.jobDate3
            }})
            tl.to([self.jobTitle, self.jobP, self.jobDate], {opacity : 1, duration : time})
        }
    }

}
