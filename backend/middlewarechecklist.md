Describe how error conditions are defined, raised, and propagated between application components.
Describe the general pattern of how methods are defined and arranged in various application modules.
Describe the general pattern for how method parameters are defined and organized in various application modules. Are [in], [in/out], [out] parameters always specified in the same order? Do Boolean values returned by modules have a consistent outcome?
Describe the approach that is used to minimize the number of round-trips between client and server calls, particularly for out-of-process calls, and when complex data structures are involved.
Describe the major data structures that are passed between major system components.
Describe the major communication protocols that are used between major system components.
Describe the marshaling techniques that are used between various system components. Describe any specialized marshaling arrangements that are used.
Describe to what extent the system is designed with stateful and stateless components.
Describe how and when state is saved for both stateful and stateless components.
Describe the extent to which objects are created, used, and destroyed versus re-used through object pooling.
Describe the extent to which the system relies on threading or critical section coding.
Describe the approach and the internal documentation that is used internally in the system to document the methods, methods arguments, and method functionality.
Describe the code review process that was used to build the system.
Describe the unit testing that has been used to test the system components.
Describe the pre- and post-condition testing that is included in various system modules.
Describe the assertion testing that is included with the system.
Do components support all the interface types they need to support or are certain assumptions made about what types of components will call other components either in terms of language bindings or other forms of marshaling?
Describe the extent to which big-endian or little-endian data format problems need to be handled across different platforms.
Describe if numbers or strings need to be handled differently across different platforms.
Describe whether the software needs to check for floating-point round-off errors.
Describe how time and date functions manage dates so as to avoid improper handling of time and date calculation or display.
Describe what tools or processes have been used to test the system for memory leaks, reachability, or general robustness.
Describe the layering of the systems services software. Describe the general number of links between major system components. Is the system composed of a lot of point-to-point interfaces or are major messaging backbones used instead?
Describe to what extent the system components are either loosely coupled or tightly coupled.
What requirements does the system need from the infrastructure in terms of shared libraries, support for communication protocols, load balancing, transaction processing, system monitoring, naming services, or other infrastructure services?
Describe how the system and system components are designed for refactoring.
Describe how the system or system components rely on common messaging infrastructure versus a unique point-to-point communication structure.
