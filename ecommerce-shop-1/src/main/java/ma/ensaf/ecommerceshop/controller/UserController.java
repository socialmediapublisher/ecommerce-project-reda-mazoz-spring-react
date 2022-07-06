package ma.ensaf.ecommerceshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ma.ensaf.ecommerceshop.model.User;
import ma.ensaf.ecommerceshop.model.UserRole;
import ma.ensaf.ecommerceshop.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class UserController {
	
	@Autowired
	private UserRepository usersRepository;
	
	@GetMapping("users")
	public List<User> getUsers()
	{
		return usersRepository.findAll();
	}
	
	@PostMapping("user/register")
	public ResponseEntity<?> createUser(@RequestParam String username, @RequestParam String password, @RequestParam String mail)
	{
		usersRepository.save(new User(username, password, mail, UserRole.User));
		return ResponseEntity.ok("User has been created succesfully.");
	}
}
