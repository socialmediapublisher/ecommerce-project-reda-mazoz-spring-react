package ma.ensaf.ecommerceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.ensaf.ecommerceshop.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
