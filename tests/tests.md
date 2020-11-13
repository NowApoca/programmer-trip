Testing
	Testing is very important, is probably the most important part of a project. There you can refactor without breaking the code, document flows, test errors, test weaknes, etc. If I have to study a project first I look for tests for knowing which endpoints do what, how functions work, expected inputs.
	Also you have a "green light" that tells you that everything tested is working fine. Did u touch something in a routine? See the light and check that is still being green!.
Test trip:
	1. Setup the context
	2. Exec the function
	3. Verify the result is okey
	4. tear down: empty the persistance data system
Mocking vs Stub
	I understund mocking as: you "mock" certain behaviour as a DB, a cache, o whatever you want. And you test another funcionality with that mocks.
	I understund stub like: you contrast your tested function with a real object or something that you expect.
	I dont like mocking, it requires a lot of work and even you can write badly the mock and the test will throw a green light but really it is not working. But perhaps there are functionality that is not easy to test.

tips:
	- Never test intern or private functions, they are tested implicitly when you test the function that uses it. If you have a private function and you make it public for testing it, you are breaking code. Probably it is going to work, but you are doing something dirty: you are not making encapsulated code. Dont test all, test private functions grows maintance and breaks ( or make dirty ) code.
	- Dont write funcionality in the code that mirror the test. For example:
		function aPlusb(a, b){ return a + b }
		The test shouldnt expect: expect(aPlusb(3,5)).toEqual(3+5). You are duplicating code and you inherit the problems of duplicating code i.e. what pass if you write neither the test and the function well?		
		function aPlusb(a, b){ return a + b + 1 } ----> expect(aPlusb(3,5)).toEqual(3+5 + 1)
		You are going to have a green light! And it is not true. You think that your code works but it doesnt. It can be very harmful like a false negative with the covid19.
	- GOLD RULE: make tests simple, test one thing.
	- Write tests with 3 titles: 1 function tested, 2 context, 3 expected result
	- Use linters for knowing if some test doesnt have expect or things that are not being tested
	- Dont use foo values or static values. Instead, use things like faker that provides you with fake 'real formated' data
	- Use things like fasttest that run n test with n different and common problematic values
	- Dont catch errors in test. Instead, use test library apy like expect().toThrow or something like that
	- Tag tests. Some libraries alows you to run tests by tag i.e. 'run #PeopleClass'
	- There are tons of different tests. Explore them and write a lot of tests with different testing approachs.
	- use PACT for testing releases in different clients
	- Test middleware: it depends a lot in the library used for handling http requests. Try to abstract middleware of the library and test that middleware (in general they are public routines)
	- Use Chaos monkey for system/firmware/hardware tests like run out of memory
	- Try to adquire some good coverage of 80, 90%
	- Check uncovered tested code for stuyding leaks
	- realize end to end tests
	- paralelize automated tests

