package org.home.on.domain.user;

import org.apache.tomcat.util.descriptor.web.ResourceBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.home.on.utils.ResourcePaths;

import java.util.List;

@RestController
@RequestMapping(path = ResourcePaths.USER_PATH)
public class UserResource extends ResourceBase {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<UserEntity> findAll() {
        return userRepository.findAll();
    }

}
