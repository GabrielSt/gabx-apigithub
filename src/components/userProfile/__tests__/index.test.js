import React from "react";
import { shallow } from "enzyme";
import UserProfile from "../../userProfile";
const userPayload = require("../__payload__/payloadUser.json");

describe("Testing UserProfile component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<UserProfile user={userPayload} />);
    expect(wrapper).toMatchSnapshot();
  });
});
