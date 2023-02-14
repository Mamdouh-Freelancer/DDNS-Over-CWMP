# DDNS-Over-CWMP
First DDNS client for old routers using CWMP running out of the box on Google Script.

# Disclaimer
Reusing your old router is not good idea because it may has security issues or firmware bugs. So use it at your own risk. and my code is tested and working with 12 years old routers with no need for any firmware changes and advanced users only considered to use such feature and BTW if you messed up with some settings you will need to reset the router to it's default again.

# Why DDNS-Over-CWMP?

Your router has no DDNS feature? 

Your router has only tzo.com whitch no longer available?

Your router doesn't support GNUdip or has outdated version so dynu.com is not working?

Your router doesn't support free services like dynu.com or duckdns.org?

You need an alternative to no-ip.com which requires your confirmation every 30 days?

You don't like to pay for dyn.com or dyndns.com?

You don't want to leave a PC powered on 24/7 running DDNS client software?


Almost all routers support CWMP protocol, Why? Coz your ISP wants to access to your router configurations for troubleshooting and firmware upgrades.

Now all you need is to use any server as ACS endpoint and here we use the powerful Google Script and running javascript code as DDNS client for DuckDNS and it works out of the box repurposing CWMP TR096 with the power of by DuckDNS! 


Just replace `var duckDNS` values before using with your own, Paste the code in Google Script `Code.gs` file, Deploy as web app and Copy URL and use it with your router settings as ACS URL.

![ddns01](https://user-images.githubusercontent.com/23267401/218658318-d2f95141-f266-4614-a933-7b9da9c7581a.png)


![ddns02](https://user-images.githubusercontent.com/23267401/218658229-06d47ece-2aad-42c0-b401-1eb429b1fb88.png)
