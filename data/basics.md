Data is something that any developer can avoid. In each class, each model, each set, you have data. And there are a lot of things about data like privacy, concurrency, size, etc. Here I will write some basics and considerations.
tips
	- save data in all cases. You cant lost data. Be careful with logs.
	- Do not log sensible data
	- Hash one way sensible data that it doesnt to be decrypted for use (like passwords)
	- If you have sensible data that you have to reuse like credit cards or medical stuff, you have to hash in two ways.
	- if you have data hashed in 2 ways, you have to prepare your code for change the secret and mantain the previous info useful
	- autocomplete off in sensible data
	- you can avoid cache in pages with sensible data
	- Be careful in shared files with endpoints. That shared files cannot be sensible
	
