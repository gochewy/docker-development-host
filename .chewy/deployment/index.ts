import * as chewy from "@gochewy/lib";
import * as docker from "@pulumi/docker";

export = async () => {
  const project = chewy.project.getProjectConfig();
  const id = `${project.name}-${project.id}`;

  const networkName = `${id}-network`;
  const network = new docker.Network(networkName, {
    name: networkName,
  });

  return {
    networkName
  }
};
