.PHONY: client server 

server:
	rails s -p 3001

client:
	cd client; npm start

	