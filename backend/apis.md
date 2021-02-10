REST is not a protocol, is just an architecture for APIS. REST where designed in the following PHD: https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm

As REST is not a formal architecture, there are a lot of opinions about what is REST or not, but there are 5 constraints that must exist in order of being a REST API:

# It must be a Client - Server system. The client just fetch the data and the server take care of storage and logic.
# Communication between client and server is stateless. This means that every client request contains all the information necessary for the server to process the request. That means that the server must not see a shared memory for knowing what the client wants, they just read the request. It simplifies the code.
# Client cannot know if he comunnicates with the sv or with a proxy (important in security)
# REST defines a set of well defined operations that can be executed on a resource and improves code readability


Adventages:

# Client and Server can be developed separately. 
# Any request can be processed by any server. No Global state is required (it can be cachable)

Resources and operations:

A resource is something that is uniquely addressable. It means that is something that in a server resides in a unique address. A file, a path, whatever.

The HTTP protocol define a set of operations that can be executed on a single or multiple resources:

# GET: A safe read-only method that reads a single or a list of resources.
# POST: Creates a new resource.
# PUT: Completely replaces the resource(s) at the given location with the new data. change the entire resource
# PATCH: Merges the resource(s) at the given location with the new data. changes some fields of the resource
# DELETE: Deletes the resource(s) at a location.
# HEAD: Same as GET but only returns the header and no data. ?

Source: Here it explains real time data and more about Feather JS https://blog.feathersjs.com/design-patterns-for-modern-web-apis-1f046635215

