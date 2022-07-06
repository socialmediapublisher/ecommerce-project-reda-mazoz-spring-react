package ma.ensaf.ecommerceshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.ensaf.ecommerceshop.model.Category;
import ma.ensaf.ecommerceshop.repository.CategoryRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("categories")
	public List<Category> getCategories()
	{
		System.out.print("df");
		return categoryRepo.findAll();
	}
	
}
