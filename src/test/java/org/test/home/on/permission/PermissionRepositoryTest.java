package org.test.home.on.permission;
import java.util.List;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.home.on.permission.PermissionEntity;
import org.home.on.permission.PermissionRepository;
import org.test.home.on.domain.user.UserRepositoryTest;
import org.test.home.on.utils.BaseTest;

public class PermissionRepositoryTest extends BaseTest {

    private static final Logger LOGGER = Logger.getLogger(UserRepositoryTest.class);

    @Autowired
    private PermissionRepository permissionRepository;

    @Test
    public void findAllTest() {
        List<PermissionEntity> permissions = this.permissionRepository.findAll();

        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Test FindAll(): " + permissions);
        }
    }

}