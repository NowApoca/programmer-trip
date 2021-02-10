mdiez@moc-influx-trials:~$ eval "$(ssh-agent -s)"
Agent pid 29168
mdiez@moc-influx-trials:~$ git clone git@github.com:money-on-chain/omoc_tools.git
Cloning into 'omoc_tools'...
Warning: Permanently added the RSA host key for IP address '140.82.114.4' to the list of known hosts.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0664 for '/home/mdiez/.ssh/id_rsa' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "/home/mdiez/.ssh/id_rsa": bad permissions
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
mdiez@moc-influx-trials:~$ cd ..sh
-bash: cd: ..sh: No such file or directory
mdiez@moc-influx-trials:~$ chmod 400 ./.ssh/id_rsa 

