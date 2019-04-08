import React from "react";
import { shallow } from "enzyme";
import Header from "../../header";

describe("Testing header component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
