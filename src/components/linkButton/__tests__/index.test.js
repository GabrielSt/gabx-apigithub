import React from "react";
import { shallow } from "enzyme";
import LinkButton from "../../linkButton";

describe("Testing linkButton component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<LinkButton goTo="home" btnLabel="home" />);
    expect(wrapper).toMatchSnapshot();
  });
});
