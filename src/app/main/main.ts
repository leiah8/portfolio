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
    resumeURL : string = './main.component.html'  // "./LeiahNay-Resume.pdf" //to do: show resume file open

    constructor(setup : MainSetup) {
        var self = this
        this.header = setup.header
        this.dropdown = setup.dropdown
        this.menuBtn = setup.menu
        this.menuExit = setup.menuExit

        this.gitBtn = setup.gitBtn
        this.resumeBtn1 = setup.resumeBtn1
        this.linkedInBtn1 = setup.linkedInBtn1

        this.init()

        

    }

    init() {
        this.setupButtons()

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

}
