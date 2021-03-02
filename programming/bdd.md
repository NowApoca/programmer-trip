Difference with TDD:

There is a whole misconception about these 2 development practices. Don't worry I was a victim too, till I found the truth :-).Though they are both about software development and test automation, they are not the same.TDD (Test-Driven Development) involves where writing tests before the actual code implementation. Developers use those tests to basically drive the development.TDD can be practiced at different levels of granularity, from acceptance tests to unit tests. An example could be testing a method and asserting that it returns the expected results. BDD also involves writing tests before implement, the difference here, however, is that BDD tests the software actual behavior from the end users perspective. For example When I enter my user and password and click login, what happens. This is totally from the UI point of view. BDD again uses natural language to describe tests which can be understood by non-programmers as against TDD which involved writing of actual code.


Format:

The ‘Given-When-Then’ formula BDD example
This is the proposed template for writing BDD test cases for a user story, which can be defined as:

Given a certain scenario
When an action takes place
Then this should be the outcome.

A practical example would be:-

Given the User has not entered any data on the form
When they click the submit button
Then proper validation messages should be show.

perhaps they are just tested by customers or business people, product manager, etc.

SOURCE: https://medium.com/codeops/what-is-bdd-and-why-936e80bce511
https://blog.testlodge.com/what-is-bdd/
