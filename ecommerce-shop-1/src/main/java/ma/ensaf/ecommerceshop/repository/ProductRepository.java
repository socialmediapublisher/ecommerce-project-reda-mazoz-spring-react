package ma.ensaf.ecommerceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.ensaf.ecommerceshop.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
