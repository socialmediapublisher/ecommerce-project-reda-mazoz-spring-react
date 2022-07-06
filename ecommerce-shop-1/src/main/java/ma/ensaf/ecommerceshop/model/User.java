package ma.ensaf.ecommerceshop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String username;
	@Column(name = "user_password")
	private String password;
	private String mail;

	private UserRole roleType;
	
	public User() { }
	
	public User(String username, String password, String mail, UserRole roleType) {
		super();
		this.username = username;
		this.password = password;
		this.setMail(mail);
		this.setRoleType(roleType);
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public UserRole getRoleType() {
		return roleType;
	}

	public void setRoleType(UserRole roleType) {
		this.roleType = roleType;
	}
	
	
}