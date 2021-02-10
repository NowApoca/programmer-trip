Difference between Docker Containers and Virtual Machines

# Docker Containers

# Docker Containers contain binaries, libraries and configuration files along with the application itself. It just charges whatever the app has to use
# They don’t contain a guest OS for each container and rely on the underlying OS kernel, which makes the containers lightweight. A OS have more than a GB
# Containers share resources with other containers in the same host OS and provide OS level process isolation. It is awesome for microservices.

# Virtual Machines

# Virtual Machines (VMs) run on Hypervisors, which allow multiple Virtual Machines to run on a single Machine along with its own operating system.
# Each VM has its own copy of an operating system along with the application and necessary binaries, which makes it significantly larger and it requires more resources.
# They provide Hardware-level process isolation and are slow to boot.

Terminologies:

Image: It is a file, comprised of multiple layers, used to execute code in a Docker container. Basically is the app, the container borns when the image is built.

Container: Runtime instance of an image. Basically the app running. It is awesome because yyou package application libraries and dependecies, just that. Withput redundancy.

Docker File: Text document where commands for generating an Docker Image are coded. The image is created from a Docker file.

Engine: Where the containers are hosted. Is a client server based app. It consists in three parts:

	# Server: It is responsible for creating and managing Docker images, containers, networks and volumes on the Docker. It is referred to as a daemon process.
	# REST API: It specifies how the applications can interact with the Server, and instructs it what to do.
	# Client: The Client is a docker command-line interface (CLI), that allows us to interact with Docker using the docker commands.

Docker Hub is the official online repository where you can find other Docker Images that are available for use.

(Where is the bash running in a container? is the master pc bash? )

The source has steps for using docker hub and etc

SOURCE: https://medium.com/swlh/introduction-to-docker-96aad5eabb30
