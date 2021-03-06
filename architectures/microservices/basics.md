General benefits of Microservices:

# Each service is relatively small (in comparision with the general project) so easy to understand and change
# Services are smaller and faster to test and run tests ( you have not to run the entire app for testing )
# Services can be deployed independently without start the entire app
# Each team owns his project, so multitaskin is no longer needed (And thats a problem, we link with DEVOPS practice summary)

# Each service is isolated, so if it falls it doesnt affect the entire app
# Languages can be mixed in the same system


General drawbacks of Microservices:

# It is more complex than a monolithic system
# Deal with partial failure is needed
# Developers must implement the internal communications
# Testing interactions is not easy
# Developer tools/IDEs are oriented toward building monolithic applications and don’t provide explicit support for developing distributed applications ( not a strong point I guess )
# For deploying it is a little bit complex because you have to orchest many services
# Increased memory consumption

When we should use it?

# If it is the first version
# If the team is small
# If you need fast development and not scalate ur system

Sources: 
https://alex-g.medium.com/microservices-architecture-74c26df8688
Microservices Patterns: With examples in Java 1st Edition
https://martinfowler.com/articles/microservices.html (A bible)

Tiene muy buenas definiciones practicas: https://medium.com/swlh/microservices-architecture-from-a-to-z-7287da1c5d28


Buen link sobre authenticacion en microservicios: https://medium.com/capgemini-norway/oauth2-authorization-patterns-and-microservices-45ffc67a8541


Tiene buenas practicas que yo considere antes: https://medium.com/capital-one-tech/10-microservices-best-practices-for-the-optimal-architecture-design-capital-one-de16abf2a232

API gateway pattern: https://blog.devgenius.io/microservices-design-api-gateway-pattern-980e8d02bdd5

Es un buen resumen de microservicios que resumen todos los temas: https://ajay-yadav109458.medium.com/basics-of-microservice-architecture-208ed81c558d


DATA consistency en microservicios: https://dilfuruz.medium.com/data-consistency-in-microservices-architecture-5c67e0f65256

NOjdejs parterns: https://blog.bitsrc.io/my-favorite-microservice-design-patterns-for-node-js-fe048c635d83
