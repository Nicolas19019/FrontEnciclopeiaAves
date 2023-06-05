<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>LOGIN</title>
<link rel="stylesheet" href="login.css">
</head>
<body>
	<div class="container">
		<header>
			<h1>Login</h1>

			<img
				src="https://seeklogo.com/images/U/universidad-el-bosque-logo-A837187DAB-seeklogo.com.png"
				alt="Escudo Universidad" class="escudo-universidad">
		</header>

		<form method="GET" action="/FrontEnciclopediaAves/admin">
			<div class="box">
				<label for="username">Username:</label><br> <input type="text"
					id="username" name="username"><br> <br>
			</div>
			<div class="box">
				<label for="password">Password:</label><br> <input
					type="password" id="password" name="password"><br> <br>
			</div>
			<input type="submit" value="Login" class="btn">
		</form>
	</div>
</body>
</html>