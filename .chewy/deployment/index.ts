import * as pulumi from "@pulumi/pulumi";
import * as docker from "@pulumi/docker";
import * as chewy from "@gochewy/lib";

const project = chewy.project.getProjectConfig();
const id = `${project.name}-${project.id}`;

export const networkName = `${id}-network`
const network = new docker.Network(networkName, {
    name: networkName,
});
