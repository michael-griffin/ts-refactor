import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

const box = {
    id: "asdf",
    height: 60,
    width: 100,
    backgroundColor: "red",
}

describe("test BoxList component", function () {

    test("box add form can successfully add a new box", function () {
        const {container, debug} = render(<BoxList />);

        const heightInput = container.querySelector("#newBox-height")!;
        const widthInput = container.querySelector("#newBox-width")!;
        const colorInput = container.querySelector("#newBox-backgroundColor")!;
        const submitBtn = container.querySelector(".NewBoxForm-addBtn")!;

        const boxElementsOriginal = container.querySelectorAll(".Box")!;
        expect(boxElementsOriginal.length).toEqual(0);

        fireEvent.change(heightInput, {target: {value: box.height}});
        fireEvent.change(widthInput, {target: {value: box.width}});
        fireEvent.change(colorInput, {target: {value: box.backgroundColor}});

        fireEvent.click(submitBtn);
        const boxElements = container.querySelectorAll(".Box")!;
        expect(boxElements.length).toEqual(1);

        fireEvent.click(container.querySelector(".Box-removeBtn")!);
        const noMoreBoxes = container.querySelectorAll(".Box")!;
        expect(noMoreBoxes.length).toEqual(0);
    })


})