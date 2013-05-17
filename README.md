# Node Proxy based on http-proxy

Without IPTable Port Forwarding
sudo npm start

Iptable port forwarding
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
http://stackoverflow.com/questions/6109089/how-do-i-run-node-js-on-port-80

http://serverfault.com/questions/159544/undoing-the-port-forwarding