const {
  readDefinitionFile,
  getTree,
  getTreeForProject,
  parentChainFromNode
} = require("../index");
jest.mock("../index");
readDefinitionFile.mockImplementation(() => "readDefinitionFile");
getTree.mockImplementation(() => "getTree");
getTreeForProject.mockImplementation(() => "getTreeForProject");
parentChainFromNode.mockImplementation(() => "parentChainFromNode");

const path = require("path");

test("readDefinitionFile", async () => {
  // Act
  const result = await readDefinitionFile(
    path.join(".", "test", "resources", "build-config-with-dependencies.yaml")
  );
  // Assert
  expect(result).toBe("readDefinitionFile");
});

test("getTree", async () => {
  // Act
  const result = await getTree(
    path.join(".", "test", "resources", "build-config-with-dependencies.yaml")
  );
  // Assert
  expect(result).toBe("getTree");
});

test("getTreeForProject", async () => {
  // Act
  const result = await getTreeForProject(
    path.join(".", "test", "resources", "build-config-with-dependencies.yaml")
  );
  // Assert
  expect(result).toBe("getTreeForProject");
});

test("parentChainFromNode", async () => {
  // Act
  const result = await parentChainFromNode(
    path.join(".", "test", "resources", "build-config-with-dependencies.yaml")
  );
  // Assert
  expect(result).toBe("parentChainFromNode");
});