Tips:
- Sessions are stateful. Both browser and backend have to mantain the state of the session
- Have to be random among the users in order to avoid duplicated sessions (that can be harmful)
- Session ID: At least 64 bits of entropy (OWASP)
- Save session in secure mode
- Be careful about where store it. Remember that for example users can avoid the use of cookies. That users wont be able to mantain the session because they wont save the session id
- In order to mantain a permanent session ID, you should save 2 sessions: one permanent and other short. You have to use the short one for checking critical endpoints (also a 2FA could be an option for getting that session ID)
- Button for closing all the sessions
- When user changes the password you should erase all the sessions regarding that account
- Session ids should be salted
- If you save the ip of the requester with the session, if the session is stoled they cant perform anything outside the origin pc
- If they stole the session id and the pc, you can ask for 2FA
- reset sessions when permissions are updated (same as password)

