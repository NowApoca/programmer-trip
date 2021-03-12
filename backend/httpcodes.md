HTTP Response Status Code Classes

All HTTP response status codes are separated into five classes (or categories).

The first digit of the status code defines the class of response. The last two digits do not have any class or categorization role.

1xx (Informational): The request was received, continuing process
2xx (Successful): The request was successfully received, understood and accepted
3xx (Redirection): Further action needs to be taken in order to complete the request
4xx (Client Error): The request contains bad syntax or cannot be fulfilled
5xx (Server Error): The server failed to fulfill an apparently valid request


2xx:

	200: the request has succeeded
	201: success with a new resource created
	202: ??? Request was accepted and it is still being processed, server responses without ending the task.
	203: ??? the request was successful but the response was catched by a proxy and the proxy answers u with a 203, an no-author success responses
	204: it was succcessful without content or info in the response
	205: ??? Reset Content. The server has fulfilled the request and desires that the user agent reset the “document view”, which caused the request to be sent, to its original state as received from the origin server. Entiendo que si tenes un form que mantiene la data tenes que darle a F5 para que el form quede en blanco pero es raro
	206: the server is successfully fulfilling a range request. It did not finished, for example by stream
	207: multi status, it responses more than one status code if different resources are affected
	208: ??? Already Reported. Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.
	226: ??? The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

3xx: Statuses in the 3xx class are sent when additional action is required on the part of the client in order to complete the request. This is most commonly used in redirecting one URL to another, though not always

	300: el recurso tiene mas de una representacion o uri y una lista de ellas con una descripcion es dada
	301: el recurso usado en el request ahora posee una nueva URI de referencia. por ejemplo en un put o post o algo asi
	302: ??? The target resource resides temporarily under a different URI. Since the redirection might be altered on occasion, the client ought to continue to use the effective request URI for future requests.
	303: the server is redirecting to other resource for responsing indirect the original request
	304: A conditional GET or HEAD request has been received and would have resulted in a 200 OK response if it were not for the fact that the condition evaluated to false.
	305: ??? DEPRECATED
	307: The target resource resides temporarily under a different URI. There is a difference between 302 and 307.the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.
	308: Permanent Redirect. The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.

4xx: The 4xx series of HTTP errors is intended to be used when the error seems to be coming from the client — that is, there is something wrong with the request.

	400: The server cannot or will not process the request due to something that is perceived to be a client error 
	401: Unauthenticated user
	402: payment required, future cases
	403: unauthorizede. we know the user but he is not allowed to perform the task
	404: resource not found
	405: The method received in the request-line is known by the origin server but not supported by the target resource.
	406: The target resource does not have a current representation that would be acceptable to the user agent
	407: Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy.
	408: Request Timeout. The server did not receive a complete request message within the time that it was prepared to wait.
	409: The request could not be completed due to a conflict with the current state of the target resource. The conflic could be resolved for the user resubmit the request.
	410: 410 Gone. The target resource is no longer available at the origin server and that this condition is likely to be permanen. Similar to 404 but here we say that the the resource was early.
	411: The server refuses to accept the request without a defined Content-Length.
	412: preconditions of the request failed. One or more conditions given in the request header fields evaluated to false when tested on the server.
	413: The server is refusing to process a request because the request payload is larger than the server is willing or able to process. MORE THAN N MEGABYTES.
	414: The server is refusing to service the request because the request-target is longer than the server is willing to interpret. (URI TOO LONG)
	415: The origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource.
	416: No valid request range. None of the ranges in the request's Range header field1overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.
	417: Expectation Failed. The expectation given in the request's Expect header field1could not be met by at least one of the inbound servers.
	422:  Unprocessable Entity. The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was unable to process the contained instructions.
	423: Locked. The source or destination resource of a method is locked.
	424: Failed Dependency. The method could not be performed on the resource because the requested action depended on another action and that action failed.
	426: Upgrade Required. The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
	429: Too Many Requests. The user has sent too many requests in a given amount of time ("rate limiting").
	431: Similar to 411. Request Header Fields Too Large. The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
	451: Unavailable For Legal Reasons. The server is denying access to the resource as a consequence of a legal demand.

5xx This is the most generic Server Error, and is issued by web servers when something indeterminate went wrong. Probably the request is legal, but the problem is in the sv.

	500: internal server error. A not handled error code
	501: the server does not support the functionality (wich is the difference with a not found endpoinmt?)
	502: bad gateway. The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.
	503 Service Unavailable. The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.
	504 Gateway Timeout. The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.
	505 HTTP Version Not Supported. The server does not support, or refuses to support, the major version of HTTP that was used in the request message.
	506 Variant Also Negotiates. The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
	507 Insufficient Storage. The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
	508 Loop Detected. The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed.
	510 Not Extended. The policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request. Cual es la diferencia con un bad request?
	511 Network Authentication Required. The client needs to authenticate to gain network access. cual es la diff con un 401 o 403.
