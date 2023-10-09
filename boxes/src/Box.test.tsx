import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

//will probably have to mock this, or else check if it's removed?
const remove = jest.fn();//function() { console.log("pressed function" )};

const box = {
    id: "asdf",
    height: 60,
    width: 100,
    backgroundColor: "red",
    remove: remove
}



//Tests to do:

//Render without crashing
describe("Box tests", function (){

    test("renders without crashing", function (){
        render(<Box {...box} />);
    })

    test("Box appears on screen, and has the correct style", function () {

        const {container, debug} = render(<Box {...box} />);

        const myBox = container.querySelector(".Box-box") as HTMLElement;

        expect(myBox.style.width).toEqual("100em");
        expect(myBox.style.height).toEqual("60em");
        expect(myBox.style.backgroundColor).toEqual("red");
    })


    test("Box has a remove function", function () {
        const {container, debug} = render(<Box {...box} />);
        const myBox = container.querySelector(".Box-box") as HTMLElement;
        const removeBtn = container.querySelector(".Box-removeBtn") as HTMLElement;

        fireEvent.click(removeBtn);
        expect(remove).toBeCalledTimes(1);
    })
})


