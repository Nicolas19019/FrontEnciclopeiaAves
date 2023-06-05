package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class ServletAdmin extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		resp.setContentType("text/html");
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		String verfiyu = "Admin";
		String verifyp = "123456789";

			if (verfiyu.equals(username) && verifyp.equals(password)) {
				resp.sendRedirect("administrador.html");
			} else {
				// Si las credenciales son incorrectas, mostrar una alerta y redirigir al
				// usuario de vuelta al formulario de inicio de sesión
				resp.setContentType("text/html");
				PrintWriter out = resp.getWriter();
				out.println("<html><body onload=\"showLoginError()\">  <h1>ERROR</h1> </body></html>");
				resp.setHeader("Refresh", "0; URL=login.jsp");

				out.close();
			}
		}

	
}
