import React from "react";
import { shallow } from "enzyme";
import Search from "../../search";

describe("Testing Search component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
