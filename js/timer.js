export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset"),
        };

        this.interval = null;
        this.remainingSeconds = 90;

        this.updateInterfaceControl();

        this.el.control.addEventListener("click", () => {
            // TODO: add in the code
        })

        this.el.reset.addEventListener("click", () => {
            // TODO: add in the code
        })
    }

    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;


        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    updateInterfaceControl() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-icons-outlined">play_circle</span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.remove("timer__btn--stop");
        } else {
            this.el.control.innerHTML = `<span class="material-icons-outlined">pause</span>`;
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.remove("timer__btn--start");
        }

    }


    static getHTML() {
        return `
        <span class="timer__part timer__part--minutes">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--seconds">00</span>
        <button type="button" class="timer__btn timer__btn--control timer__btn--start">
        <span class="material-icons-outlined">play_circle</span></button>
        <button type="button" class="timer__btn timer__btn--control timer__btn--reset">
        <span class="material-icons-outlined">timer</span>
        </button>`;
    }


}