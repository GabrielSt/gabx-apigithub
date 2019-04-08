import React from "react";
import { shallow } from "enzyme";
import RepoDetail from "../../repoDetail";
const repositoriePayload = require("./__payload__/payloadRepositorie.json");

describe("Testing RepoDetail component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<RepoDetail repositorie={repositoriePayload} />);
    expect(wrapper).toMatchSnapshot();
  });
});
