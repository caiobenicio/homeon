package org.home.on.domain.user;
import java.util.List;

import org.home.on.domain.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	public List<UserEntity> findByName(String nome);
}
