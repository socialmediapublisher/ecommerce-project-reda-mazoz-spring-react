package ma.ensaf.ecommerceshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ma.ensaf.ecommerceshop.model.Category;
import ma.ensaf.ecommerceshop.model.Product;
import ma.ensaf.ecommerceshop.model.User;
import ma.ensaf.ecommerceshop.model.UserRole;
import ma.ensaf.ecommerceshop.repository.CategoryRepository;
import ma.ensaf.ecommerceshop.repository.ProductRepository;
import ma.ensaf.ecommerceshop.repository.UserRepository;
import ma.ensaf.ecommerceshop.controller.CategoryController;

@SpringBootApplication
public class EcommerceShop1Application implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(EcommerceShop1Application.class, args);
	}
	
	@Autowired
	private UserRepository usersRepository;
	@Autowired
	private ProductRepository productsRepository;
	@Autowired
	private CategoryRepository categoriesRepository;
	
	@Override
	public void run(String... args) throws Exception{
		this.usersRepository.save(new User("tester","test123","test@test.com", UserRole.Admin));
		Category cat = new Category("Computers");
		this.categoriesRepository.save(cat);
		this.productsRepository.save(new Product("HP Laptop 123456","2000$", cat, "", ""));
	}

}
