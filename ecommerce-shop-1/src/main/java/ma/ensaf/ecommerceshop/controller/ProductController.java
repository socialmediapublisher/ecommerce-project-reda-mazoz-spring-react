package ma.ensaf.ecommerceshop.controller;

import java.io.File;
import java.nio.file.Path;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ma.ensaf.ecommerceshop.model.Category;
import ma.ensaf.ecommerceshop.model.Product;
import ma.ensaf.ecommerceshop.repository.CategoryRepository;
import ma.ensaf.ecommerceshop.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class ProductController {

	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	@GetMapping("products")
	public List<Product> getProducts()
	{
		return productRepo.findAll();
	}
	
	@PostMapping("product/upload")
	public ResponseEntity<?> saveProduct(@RequestParam("name") String name, @RequestParam("price") String price,@RequestParam("categoryId") int categoryId, @RequestParam("description") String description, @RequestParam("image") MultipartFile image)
	{
		System.out.println("uploadTry");
		String fileName = StringUtils.cleanPath(image.getOriginalFilename());
		System.out.println(fileName);
		try
		{	
			Product newProduct = new Product(name, price, categoryRepo.findAll().get(categoryId), description, Base64.getEncoder().encodeToString(image.getBytes()));
			productRepo.save(newProduct);
		}
		catch(Exception e)
		{
			System.out.println("big Fail");
			System.out.print(e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.ok("Product Image has been Uploaded succesfully.");
	}
	
}
