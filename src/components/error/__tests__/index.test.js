import React from "react";
import { shallow } from "enzyme";
import Error from "../../error";

describe("Testing Error component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Error error="userError" />);
    expect(wrapper).toMatchSnapshot();
  });
});
