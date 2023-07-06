// import { svgns } from "../api"
import { gsap } from "gsap";



export interface MainSetup {
    header : HTMLElement,
    dropdown : HTMLElement,
      
    menu : HTMLElement,
    menuExit : HTMLElement,
}

export class MainAPI {

    header : HTMLElement
    dropdown : HTMLElement
    
    menuBtn : HTMLElement
    menuExit : HTMLElement

    constructor(setup : MainSetup) {
        var self = this
        this.header = setup.header
        this.dropdown = setup.dropdown
        this.menuBtn = setup.menu
        this.menuExit = setup.menuExit

        this.init()


        //add header back in 
        

    }

    init() {
        this.setupButtons()

    }

    setupButtons() {
        var self = this
        //to do : make the drop down acc drop down nicely
        //to do : fix scrolling issue when mous is over the svg viewbox area

        gsap.set(self.dropdown, {visibility : "hidden"})
        this.menuBtn.onpointerdown = function(e) {
            console.log("hi")
            gsap.set(self.dropdown, {visibility : "visible"})
        }

        this.menuExit.onpointerdown = function(e) {
            console.log("hello")
            gsap.set(self.dropdown, {visibility : "hidden"})
        }
    }

}
