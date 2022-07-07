some fake js
	user_name = params[":username"]
	password = params[":password"]
	user = User.find_by(name: user_name)
	if user && user.password == password
		login(user)
		redirect "/users/:id"
	else
		erb :"/sessions/login"	user_name = params[":username"]
	password = params[":password"]
	user = User.find_by(name: user_name)
	if user && user.password == password
		login(user)
		redirect "/users/:id"
	else
		erb :"/sessions/login"	user_name = params[":username"]
	password = params[":password"]
	user = User.find_by(name: user_name)
	if user && user.password == password
		login(user)
		redirect "/users/:id"
	else
		erb :"/sessions/login"	user_name = params[":username"]
	password = params[":password"]
	user = User.find_by(name: user_name)
	if user && user.password == password
		login(user)
		redirect "/users/:id"
	else
		erb :"/sessions/login"	user_name = params[":username"]
	password = params[":password"]
	user = User.find_by(name: user_name)
	if user && user.password == password
		login(user)
		redirect "/users/:id"
	else
		erb :"/sessions/login"	user_name = params[":username"]
	password = params[":password"]
	user = User.find_by(name: user_name)
	if user && user.password == password
		login(user)
		redirect "/users/:id"
	else
		erb :"/sessions/login"
