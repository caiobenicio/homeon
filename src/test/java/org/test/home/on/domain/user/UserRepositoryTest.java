package org.test.home.on.domain.user;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.home.on.user.UserEntity;
import org.home.on.user.UserRepository;
import org.test.home.on.utils.BaseTest;

import java.util.List;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class UserRepositoryTest extends BaseTest {

    private  final Logger LOGGER = Logger.getLogger(UserRepositoryTest.class);

    @Autowired
    private UserRepository userRepository;

    @Test
    public void findAll() {
        List<UserEntity> users = userRepository.findAll();

        LOGGER.debug(users);

        assertNotNull(users);
        assertTrue(users.size() > 0);
    }

	@Test
	public void findAllTest() {
		List<UserEntity> users = this.userRepository.findAll();

		LOGGER.info(users);
	}
	
	@Test
	public void findFindByName() {
		List<UserEntity> sol = this.userRepository.findByName("caio");

		if (LOGGER.isInfoEnabled()) {
			LOGGER.info("Test FindAll(): " + sol);
		}
	}
}
