1. Scalability for non-uniform traffic
Scenario: you have a Supermarket application.
You have a Stock Microservice, that just shows you the amounts of articles in stock, and a Vision Microservice, which uses GPUs to detect your articles given a picture of them.
If you receive thousands of calls for your Stock APIs and just a bunch of requests for your Vision APIs, you could just replicate your Stock Microservice.
No need to double your GPU resources!
Think of it. If you kept everything in a single machine or application, and you still wanted to scale to match all the incoming requests, you would have to replicate it entirely. A waste.
2. Error resilience
Suppose you have a Bank application. Your Transfer Microservice keeps crashing, maybe for a temporary error or, worse, for a newly introduced bug (damn untested releases…).
Why should the entire Bank application be down? Maybe some customers wouldn’t even notice, because they just want to see their movements or they want to use their cards.
3. Separate deployments
Similarly to the reason above, if you have a new feature to add or a bug to fix, you can just deploy the right Microservice. Your build and deployment times should be smaller.
Also, you could put your Microservices on different machines, in different locations, maybe.
4. Complete isolation
Maybe you need complete isolation between Microservices. In this way, you can use different DBs (SQL and noSQL) or different technologies altogether. This will give you complete freedom!
And it is of course strictly related to the other points as well, about error resilience or requirements.
5. Different requirements
Do you have a heavy computation to perform? Maybe a Machine Learning one, where you need GPUs, their libraries…
Maybe that part would be much better in Python, while the other one could benefit from Java.
Or maybe libraries for the same language would create some conflicts, but you desperately need two specific versions for two distinct tasks.
And finally, perhaps you want to use two different Cloud products to host your two distinct pieces.


And remember, Monolith doesn’t mean Mess
Monolith.
Mess.
They are also spelled differently.
Someone sees Monolith as a bunch of unordered code.
They claim that Microservice pattern is the only way to have splits, order and all.
Well, I’ll reveal something.
It’s — not — true.
Your code design does not depend on process divisions. Object-Oriented Programming doesn’t either. If you split your code right, if you manage your dependencies in a clear hierarchy, as well as your files, you can achieve the same level of cohesion and decoupling.
And another secret: if you divide your APIs into separate packages/modules/controllers/blueprints/whatever in your code, then you can decide to serve them in a single process or split them in Microservices at build-time, or at run-time too, for free.
Wow.


SOURCE: https://medium.com/swlh/stop-this-microservices-madness-8e4e0695805b
