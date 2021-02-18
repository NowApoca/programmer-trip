

Tests are priority of the developers. Remind that.


The entire point of a CD pipeline is to safely deliver value continuously to our end users. Code must prove to the pipeline that it is worthy of delivery and the pipeline’s job is to prevent that delivery unless worth is proved and as fast as possible. To enable this, a product team should have the following priorities:


	Build and harden the CD pipeline.
	Keep the pipeline green. If there is a broken build, drop everything and fix it. If you cannot ship, nothing else you are working on matters anyway. Make sure that change can be delivered on demand to protect the ability to fix production without heroics.
	When (not if) a defect penetrates, harden the pipeline further by designing additional efficient tests for that defect.
	Write features and ship them daily to continuously test our ability to fix production with minimal MTTR.
	Get feedback about the status of the changes as fast as possible.
	Test DURING Development is a non-negotiable.
	There is only a single path to production for any code change, no matter how critical. We always use our emergency process and we always test the same way.
	Tests version with the code.
	Test may not be deactivated for an emergency.
	While there may be a button to push to deliver to production, there are no other manual stage gates, human intervention, or handoffs to external teams once code has passed code review.

It is important to mantain contract tests. if we need in the CI/CD pipeline a service and it doesnt run, we should mantain a Service Virtualization expecting the behaviour. For that, we can use http://www.mbtest.org/ as an example.

Or, if we dont want to implement that, we should schedule tests.



