import React from "react";
import { shallow } from "enzyme";
import RepoList from "../../reposList";
const repositoriesPayload = require("../__payload__/payloadRepositories.json");

describe("Testing RepoList component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <RepoList repositories={repositoriesPayload} activePage={1} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
