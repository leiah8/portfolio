// import { svgns } from "../api"
import { gsap } from "gsap";



export interface MainSetup {
    dropdown : HTMLElement,
      
    menu : HTMLElement,
    menuExit : HTMLElement,
    // emailBtn : HTMLElement,

    jobBtn0 : HTMLElement,
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

    jobBtn0 : HTMLElement
    jobBtn1 : HTMLElement
    jobBtn2 : HTMLElement
    jobBtn3 : HTMLElement

    jobTitle : HTMLElement
    jobP : HTMLElement
    jobDate : HTMLElement

    job0Title : string = "Korotu Technology - Data Scientist"
    job1Title : string = "Knowledgehook -  Software Engineering Intern";
    job2Title : string = "Knowledgehook - Content Engineer Assistant";
    job3Title : string = "Hatch Coding - Coding Coach";

    jobDate0 : string = "May 2024 - August 2024"
    jobDate1 : string = "May 2023 - August 2023"
    jobDate2 : string = "May 2022 - August 2022"
    jobDate3 : string = "March 2021 - August 2021"

    job0P : string = "<li> Worked in full stack development, implementing key features with Python and JavaScript in React </li>" + 
    "<li> Developed machine learning algorithms in Python to determine the amount of carbon in a forested area    </li>" + 
    "<li> Researched and applied various libraries, such as PDAL, to develop multiple different features    </li>"

    job1P : string = "<li> Developed 4 interactive games in Angular using JavaScript, HTML, and CSS </li>" +
    "<li> Utilized Socket.io to develop the base server-client architecture for a multiplayer game </li>" +
        "<li> Designed adaptable APIs that can be utilized by other developers and those without coding experience </li>" +
        "<li> Tested, conducted quality assurance, and implemented changes based on feedback for 5 projects </li>" +
        "<li> Leveraged GitHub to synchronize and co-develop software projects with a team of 15 engineers </li>"
    
    
    job2P : string = "<li> Developed 12 interactive math tools using Angular that are used by students globally    </li>" +
        "<li> Implemented alternative technical solutions to overcome design constraint </li>" +
        "<li>Created over 20 detailed bug tickets for various projects after performing quality assurance </li>" +
        "<li> Optimized code to run efficiently on numerous different devices </li>"
    
    job3P : string = "<li> Instructed 20 students of various levels on software development principles in JavaScript and Python </li>" + 
        "<li> Debugged over 50 student projects, often analyzing over 1000 lines of code </li>" 

    constructor(setup : MainSetup) {
        var self = this
        this.dropdown = setup.dropdown
        this.menuBtn = setup.menu
        this.menuExit = setup.menuExit

        // this.emailBtn = setup.emailBtn
        this.emailShowing = false;

        this.jobBtn0 = setup.jobBtn0
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

        this.jobTitle.textContent = this.job0Title
        this.jobP.innerHTML = this.job0P
        this.jobDate.textContent = this.jobDate0

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

        this.jobBtn0.innerHTML = "<p>Korotu Technology <br> Data Scientist</p>" //self.job1Title
        this.jobBtn0.onpointerdown = function() {
            tl.clear()
            tl.to([self.jobTitle, self.jobP, self.jobDate], {opacity : 0, duration : time, onComplete : function() {
                self.jobTitle.textContent = self.job0Title
                self.jobP.innerHTML = self.job0P
                self.jobDate.textContent = self.jobDate0
            }})
            tl.to([self.jobTitle, self.jobP, self.jobDate], {opacity : 1, duration : time})
            
        }

        this.jobBtn1.innerHTML = "<p>Knowledgehook <br> Software Engineering Intern</p>" //self.job1Title
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
