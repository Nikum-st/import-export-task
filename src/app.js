import Button from "../moduls/button-block";

export default function initApp() {
    const button = new Button;
    button.createButton();
    button.createEventClick();
}