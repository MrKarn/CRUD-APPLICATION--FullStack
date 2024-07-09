package Prasoon.Fullstack_Backend.repository;
import  org.springframework.data.jpa.repository.JpaRepository;
import Prasoon.Fullstack_Backend.model.User;
public interface UserRepository extends JpaRepository<User,Long>{
}
