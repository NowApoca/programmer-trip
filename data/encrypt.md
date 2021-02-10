There are a lot of different situations where you do not trust the administrators, developers, etc. Here I will write some aproaches to solve several problems:

If you trust in developers or administrators:
	Hash them all with a master key. You do not load the masterKey in the github, you load it in runtime like by terminal or etc. The problem of that is if your master key is stealed, they can desencrypt all the info.

If you do not trust administrators:
	You can hash the data of the user in each session. You encrypt and desecrypt the data with the password. It is very interesting: If the password is stealed, you only loss the data of one user. There are a lot of problems: you can not see the info of the users and if they loss the data, you cannot recovery it.
	- when they change the password, you have to desecnrypt and encrypt all
	- you have to check that in code pushs they dont log the data

Log events have to be hashed securely

Data must be clasified in several protection levels i.e: Data writeable only by the user, administrators, etc.


