# MongoDBAtlasSetup
very quick code to setup atlas onto node server
<h2>Necessary installations</h2>
1. Install Node.js and MongoDB
<br />
2. After cloning project, install npm packages and dependencies in the terminal. For example, mongodb is "npm install mongodb"
<br />
3. Create an Atlas account and follow instructions on how to create a cluster (free trial). <b>Link: https://docs.mongodb.com/guides/cloud/connectionstring/ </b> Remember: free trial is data up to 500 MB total
<br />
4. In the code, remember to replace the <...> parameters with your cluster's user configurations!

<h2>Quick Note</h2>
There is no useful code here besides testing out the functionality of Mongo Atlas' connectivity.  
Although, it is easily customizable with api's using the Express javascript dependency.

<h2>How to set this up in Oracle's Linux VM </h2>
1. Download VirtualBox https://www.virtualbox.org/wiki/Downloads
<br />
2. Create a Linux VM and setup your OS with an iso package and free acct signups
<br />
3. Go to Settings on the Linux VM in VirtualBox app (not the vm itself)
<br />
4. Go to Network (make sure VM is powered off at this time) and have network adapter attached to "Bridged Adapter"
<br />
5. Go to VM now and check network settings and look for ipv4 address.
<br />
6. Load up the repo's code (index.js)
<br />
7. Change listener's port from (3000, ...) to something like (<port number>, <ipv4 address of VM>, ...
