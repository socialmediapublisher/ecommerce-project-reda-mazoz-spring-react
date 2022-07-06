package ma.ensaf.ecommerceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.ensaf.ecommerceshop.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
